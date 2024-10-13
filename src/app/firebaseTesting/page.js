"use client";

import { Button } from "@mui/material";
import { db, storage } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import Image from "next/image";
import MenuBar from "../components/MenuBar";

async function addData(location, image) {
	try {
		const docRef = await addDoc(collection(db, "images"), {
			location: location,
			image: image,
		});
		console.log("Document written with ID: ", docRef.id);
		return true;
	} catch (error) {
		console.error("Error adding document: ", error);
		return false;
	}
}

export default function Home() {
	const [location, setLocation] = useState("");
	const [image, setImage] = useState(null);
	const [file, setFile] = useState(null);
	const [uploading, setUploading] = useState(false);
	const [uploadedUrl, setUploadedUrl] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		const added = await addData(location, image);
		if (added) {
			setLocation("");
			setImage(null);
			alert("DATA ADDED");
		}
	};

	const handleFileChange = (e) => {
		console.log(e.target.files[0]);
		setFile(e.target.files[0]);
	};

	const handleUpload = async () => {
		if (!file) {
			return;
		}
		setUploading(true);
		const storageRef = ref(storage, `images/${file.name}`);

		try {
			await uploadBytes(storageRef, file);
			const url = await getDownloadURL(storageRef);
			setUploadedUrl(url);
			console.log("File uploaded successfully");
		} catch (error) {
			confirm.error("Error uploading the file: ", error);
		} finally {
			setUploading(false);
		}
	};

	return (
		<>
			<MenuBar />
			<div className="flex justify-center p-10">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						id="location"
						value={location}
						onChange={(e) => setLocation(e.target.value)}
					/>
					<input type="file" id="file" onChange={handleFileChange} />
					<Button
						onClick={handleUpload}
						type="submit"
						variant="contained"
						disabled={uploading}
					>
						{uploading ? "Uploading image..." : "Submit"}
					</Button>
					<Image
						src={uploadedUrl}
						alt="Uploaded Image"
						width={300}
						height={300}
						layout="responsive"
					/>
				</form>
			</div>
		</>
	);
}
