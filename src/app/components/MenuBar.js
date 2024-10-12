"use client";

import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";

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

export default function MenuBar() {
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
