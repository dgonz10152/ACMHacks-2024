"use client";

import {
	AppBar,
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState, useCallback } from "react";

const containerStyle = {
	width: "100vw",
	height: "95vh",
};
const center = {
	lat: 36.998714,
	lng: -122.064035,
};

function Map() {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
	});

	console.log("Is Google Maps API loaded?", isLoaded);

	const [map, setMap] = useState(null);

	const onLoad = useCallback(function callback(map) {
		setMap(map);
	}, []);

	const onUnmount = useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={10} // Added zoom level
			onLoad={onLoad}
			onUnmount={onUnmount}
			className="top-[5vh]"
		></GoogleMap>
	) : (
		<p>Loading map...</p> // Added fallback UI during loading
	);
}

function MenuBar() {
	const [open, setOpen] = useState(false);
	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	return (
		<>
			<Box>
				<AppBar className="flex-row h-[5vh]">
					<IconButton onClick={toggleDrawer(true)}>
						<MenuIcon></MenuIcon>
					</IconButton>
				</AppBar>
			</Box>
			<Drawer className="w-full" open={open} onClose={toggleDrawer(false)}>
				<DrawerInfo />
			</Drawer>
		</>
	);
}

function DrawerInfo() {
	return (
		<Box className="w-56">
			<Typography variant="h5">Basic Needs Facilities</Typography>
			<Divider />
			<List>
				<ListItemButton href="/" className="p-6 m-2" variant="contained">
					<ListItemIcon>
						<InfoIcon />
					</ListItemIcon>
					<ListItemText>About</ListItemText>
				</ListItemButton>
			</List>
		</Box>
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
