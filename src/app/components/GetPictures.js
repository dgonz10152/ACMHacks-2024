"use client";

import { storage } from "@/app/firebaseConfig";
import { Box } from "@mui/material";
import { listAll, ref, getDownloadURL } from "firebase/storage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GetPictures(location) {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const fetchImages = async () => {
			const imagesRef = ref(storage, location.location + "/");

			try {
				const result = await listAll(imagesRef);
				const urls = await Promise.all(
					result.items.map((item) => getDownloadURL(item))
				);
				setImages(urls);
			} catch (error) {
				console.log("Error fetching images: ", error);
			}
		};
		fetchImages();
	}, []);

	return (
		<Box>
			<Box className="flex">
				{images.map((url, index) => (
					<Box key={url} className="p-3">
						<Image src={url} alt="Picture" width={600} height={600} />
					</Box>
				))}
			</Box>
		</Box>
	);
}
