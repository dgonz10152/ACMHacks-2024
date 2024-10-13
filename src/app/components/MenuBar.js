"use client";

import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";

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

import { useState, useCallback } from "react";

function DrawerInfo() {
	return (
		<Box className="w-56">
			<Typography variant="h5" style={{fontFamily:'Monaco, "Courier New", monospace'}}>Basic Needs Facilities</Typography>
			<Divider />
			<List>
				<ul>
					<Button href="/About/" className="text-black">ABOUT US</Button>
					<Button href="/app/" className="text-black">home</Button>
				</ul>
			</List>
		</Box>
	);
}

export default function MenuBar() {
	const [open, setOpen] = useState(false);
	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	return (
		<>
			<Box>
				<AppBar className="flex-row h-[5vh]  bg-yellow-500">
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
