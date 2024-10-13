import * as React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import MenuBar from "@/app/components/MenuBar";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import Divider from "@mui/material/Divider"

// components/BackgroundImage.js

const BackgroundImage = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/acmhacks-2024.appspot.com/o/images%2FCenter%20for%20Agroecology%20Farmstand2.jpg?alt=media&token=9d0d22d6-8b08-47c4-8ed7-bfa39d44a6bb')`,  // Replace with your image path
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',  // This adds a semi-transparent overlay
          zIndex: 1,
        },
      }}
    >
      {/* Content goes here */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 6,
          color: 'white',
          textAlign: 'center',
          paddingTop: '20px',
        }}
      >
		<Typography variant="h1" component="h1" sx={{ fontWeight: 'bold' }} sx={{ marginTop: '10px'}} className = "p-30 pt-20 m-30 z-30">
          SlugAid
        </Typography>
		<Typography variant="h5" component="p" sx={{ marginTop: '10px' }} >
		Simplifying essential services for Slugs, one step at a time.
        </Typography>
		<Typography variant="h1" component="h1" sx={{ fontWeight: 'bold' }} sx={{ marginTop: '10px'}} className = "p-30 pt-20 m-30 z-30">
        </Typography>
		<Button variant="contained" href="/Map" size="large">
			MAP
			</Button>
		</Box>
    </Box>
  );
};

export default function Home() {
	return (
		<>
			<div>
				<BackgroundImage />
				<MenuBar></MenuBar>
			</div>
		</>
	);
}
