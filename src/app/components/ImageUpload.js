"use client";
import React, { useState } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
	Button,
	LinearProgress,
	Box,
	MenuItem,
	Select,
	FormControl,
	InputLabel,
} from "@mui/material";

const ImageUpload = () => {
	const [file, setFile] = useState(null);
	const [progress, setProgress] = useState(0);
	const [imageUrl, setImageUrl] = useState("");
	const [location, setLocation] = useState(""); // State for selected location

	const locations = [
		"Redwood Free Market",
		"Cowell Coffee Shop",
		"Produce Pop-up ($)",
		"Terry Freitas Commons",
		"The Cove",
		"Center for Agroecology Farmstand ($)",
		"Womxn’s Center Food Pantry",
		"Ethnic Resource Centers Snack Pantry",
		"Lionel Cantu Queer Center Food Pantry",
	];

	const handleChange = (e) => {
		if (e.target.files[0]) {
			setFile(e.target.files[0]);
		}
	};

	const handleLocationChange = (e) => {
		setLocation(e.target.value); // Update location state
	};

	const handleUpload = () => {
		if (!file || !location) {
			alert("Please select a file and choose a location.");
			return;
		}

		const storageRef = ref(storage, `${location}/${file.name}`); // Use location in path
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgress(progress);
			},
			(error) => {
				console.error("Upload failed:", error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					setImageUrl(downloadURL);
				});
			}
		);
	};

	return (
		<Box>
			<FormControl fullWidth margin="normal">
				<InputLabel id="location-select-label">Select Location</InputLabel>
				<Select
					labelId="location-select-label"
					value={location}
					onChange={handleLocationChange}
					required
				>
					{locations.map((loc) => (
						<MenuItem key={loc} value={loc}>
							{loc}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<input type="file" onChange={handleChange} />
			<Button variant="contained" color="primary" onClick={handleUpload}>
				Upload
			</Button>
			{progress > 0 && <LinearProgress variant="determinate" value={progress} />}
			{imageUrl && (
				<Box mt={2}>
					<p>Image uploaded successfully!</p>
					<img src={imageUrl} alt="Uploaded" width="200px" />
				</Box>
			)}
		</Box>
	);
};

export default ImageUpload;
