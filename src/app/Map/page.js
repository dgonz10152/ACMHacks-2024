"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useState, useCallback, useEffect } from "react";
import MenuBar from "@/app/components/MenuBar";
import { db } from "@/app/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";

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
	height: "93vh",
	top: "7vh",
};
const center = {
	lat: 36.998714,
	lng: -122.064035,
};

async function fetchDataFromFirestore() {
	const querySnapshot = await getDocs(collection(db, "locationData"));
	const data = [];
	querySnapshot.forEach((doc) => {
		data.push({ id: doc.id, ...doc.data() });
	});
	return data;
}

function onMarkerClick(props) {
	const { setOpen, setLocation, location } = props;
	setLocation(location);
	setOpen(true);
}

function LocationDialog(props) {
	const { open, setOpen, location, loading } = props;

	// Add a check to ensure `location` exists before rendering content
	return loading || !location ? (
		<></>
	) : (
		<Dialog open={open} onClose={() => setOpen(false)}>
			<DialogTitle>{location.Name}</DialogTitle>
			<DialogContent>
				<Box
					component="img"
					src={location.Image}
					alt={location.Name}
					className="w-full justify-center"
				/>
				<DialogContentText>{location.About}</DialogContentText>
				<a href={"/locations" + location.Link}>
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

	const [loading, setLoading] = useState(true);
	const [open, setOpen] = useState(false);
	const [location, setLocation] = useState(null);
	const [map, setMap] = useState(null);

	const [locations, setLocations] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const data = await fetchDataFromFirestore();
			const newLocations = data.map((location) => ({
				Name: location.Name,
				About: location.About,
				Image: location.Image,
				Link: location.Link,
				Position: location.Location,
			}));
			setLocations(newLocations); // Update the state
			setLoading(false);
		}
		fetchData();
	}, []); // Empty dependency array ensures this runs once

	const onLoad = useCallback(function callback(map) {
		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	const locationsPoints = locations.map((location, index) =>
		loading ? (
			<></>
		) : (
			<Marker
				key={index}
				position={location.Position}
				title={location.Name}
				// icon={{
				// 	url: "https://media.istockphoto.com/id/1333645664/vector/pinpoint-with-fork-and-spoon-vector-icon-map-pointer-symbol-for-website-gps-navigator-apps.jpg?s=612x612&w=0&k=20&c=rvS0c2L4UBjKsK_nbzREdvDP4-vKe5-JI6AjDpNFwa8=",
				// 	scaledSize: new window.google.maps.Size(40, 40),
				// }}
				onClick={() => onMarkerClick({ setOpen, setLocation, location })}
			/>
		)
	);

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
			<LocationDialog
				open={open}
				setOpen={setOpen}
				location={location}
				loading={loading}
			/>
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
