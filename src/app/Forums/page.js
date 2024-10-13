"use client";

import React from "react";
import ImageUpload from "../components/ImageUpload";
import { Container, Typography } from "@mui/material";

const UploadPage = () => {
	return (
		<Container>
			<Typography variant="h4" align="center" gutterBottom>
				Image Upload
			</Typography>
			<ImageUpload />
		</Container>
	);
};

export default UploadPage;
