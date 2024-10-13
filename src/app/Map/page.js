"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState, useCallback } from "react";
import MenuBar from "../components/MenuBar";
import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";

const containerStyle = {
	width: "100vw",
	height: "95vh",
	top: "5vh",
};
const center = {
	lat: 36.998714,
	lng: -122.064035,
};

const locations = [
	{
		name: "Redwood Free Market",
		position: { lat: 36.99156, lng: -122.06434 },
		description:
			"The Redwood Free Market is dedicated to decreasing basic needs insecurity by providing free access to healthy food and connecting students to campus and community resources. ",
		image:
			"https://m.media-amazon.com/images/M/MV5BMDlkZTNjMWMtNmVhYy00N2RiLTg1MWYtNjY4ZDdiOGJjN2VhXkEyXkFqcGc@._V1_.jpg",
		link: "/Redwood-Free-Market",
	},
	{ name: "Porter Something", position: { lat: 36.999, lng: -122.064035 } },
];

function onMarkerClick(props) {
	const { setOpen, setLocation, location } = props;
	setLocation(location);
	setOpen(true);
}

function LocationDialog(props) {
	const { open, setOpen, location } = props;

	return (
		<Dialog open={open} onClose={() => setOpen(false)}>
			<DialogTitle>{location.name}</DialogTitle>
			<DialogContent>
				<Box
					component="img"
					src={location.image}
					alr={location.name}
					className="w-full justify-center"
				/>
				<DialogContentText>{location.description}</DialogContentText>
				<a href={"/locations/" + location.link}>
					<Button variant="contained">More Info</Button>
				</a>
			</DialogContent>
		</Dialog>
	);
}

function Map() {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
	});

	const [open, setOpen] = useState(false);
	const [location, setLocation] = useState(locations[0]);
	const [map, setMap] = useState(null);

	const onLoad = useCallback(function callback(map) {
		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	const locationsPoints = locations.map((location, index) => (
		<Marker
			key={index}
			position={location.position}
			title={location.name}
			// icon={{
			// 	url: "https://media.istockphoto.com/id/1333645664/vector/pinpoint-with-fork-and-spoon-vector-icon-map-pointer-symbol-for-website-gps-navigator-apps.jpg?s=612x612&w=0&k=20&c=rvS0c2L4UBjKsK_nbzREdvDP4-vKe5-JI6AjDpNFwa8=",
			// 	scaledSize: new window.google.maps.Size(40, 40),
			// }}
			onClick={() => onMarkerClick({ setOpen, setLocation, location })}
		/>
	));

	return isLoaded ? (
		<>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={14} // Added zoom level
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				{locationsPoints}
			</GoogleMap>
			<LocationDialog open={open} setOpen={setOpen} location={location} />
		</>
	) : (
		<p>Loading map...</p> // Added fallback UI during loading
	);
}

export default function Home() {
	return (
		<>
			<MenuBar />
			<Map />
		</>
	);
}
