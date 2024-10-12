"use client";

import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState, useCallback } from "react";
import MenuBar from "../components/MenuBar";

const containerStyle = {
	width: "100vw",
	height: "95vh",
	top: "5vh",
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
	console.log("API Key:", process.env.NEXT_PUBLIC_MAPS_API_KEY);

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
		></GoogleMap>
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
