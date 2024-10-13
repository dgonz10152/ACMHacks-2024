"use client";

import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import {
	AppBar,
	Box,
	createTheme,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";

import { useState, useCallback } from "react";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
	palette: {
		primary: {
			main: "#eab308", // your yellow color
		},
	},
});

function DrawerInfo() {
	return (
		<Box className="w-[80vw] md:w-[30vw] ">
			<a href="/">
				<Typography
					variant="h5"
					style={{ fontFamily: 'Monaco, "Courier New", monospace' }}
					className="flex justify-center p-5"
				>
					SlugAid
				</Typography>
			</a>

			<Divider />
			<List className="p-5 m-2">
				<ul>
					<ListItemButton href="/" className="text-black">
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						HOME
					</ListItemButton>
				</ul>
				<ul>
					<ListItemButton href="/Map" className="text-black">
						<ListItemIcon>
							<LocationOnIcon />
						</ListItemIcon>
						MAP
					</ListItemButton>
				</ul>
				<ul>
					<ListItemButton href="/locations/The-Cove" className="text-black">
						<ListItemIcon>
							<FoodBankIcon />
						</ListItemIcon>
						THE COVE
					</ListItemButton>
				</ul>
				<ul>
					<ListItemButton
						href="/locations/Womxns-Center-Food-Pantry"
						className="text-black"
					>
						<ListItemIcon>
							<FoodBankIcon />
						</ListItemIcon>
						WOMXNS CENTER FOOD PANTRY
					</ListItemButton>
				</ul>
				<ul>
					<ListItemButton
						href="/locations/Terry-Freitas-Commons"
						className="text-black"
					>
						<ListItemIcon>
							<FoodBankIcon />
						</ListItemIcon>
						TERRY FREITAS COMMON
					</ListItemButton>
				</ul>
				<ul>
					<ListItemButton
						href="/locations/Redwood-Free-Market"
						className="text-black"
					>
						<ListItemIcon>
							<FoodBankIcon />
						</ListItemIcon>
						REDWOOD FREE MARKET
					</ListItemButton>
				</ul>
				<ul>
					<ListItemButton href="/locations/Produce-Pop-up" className="text-black">
						<ListItemIcon>
							<FoodBankIcon />
						</ListItemIcon>
						PRODUCE POP UP
					</ListItemButton>
				</ul>
				<ul>
					<ListItemButton
						href="/locations/Lionel-Cantu-Queer-Center-Food-Pantry"
						className="text-black"
					>
						<ListItemIcon>
							<FoodBankIcon />
						</ListItemIcon>
						LIONEL CANTU QUEER CENTER FOOD PANTRY
					</ListItemButton>
				</ul>
				<ul>
					<ListItemButton
						href="/locations/Ethnic-Resource-Centers-Snack-Pantry"
						className="text-black"
					>
						<ListItemIcon>
							<FoodBankIcon />
						</ListItemIcon>
						ETHNIC RESOURCE CENTERS SNACK PANTRY
					</ListItemButton>
				</ul>
				<ul>
					<ListItemButton
						href="/locations/Cowell-Coffee-Shop"
						className="text-black"
					>
						<ListItemIcon>
							<FoodBankIcon />
						</ListItemIcon>
						COWELL COFFEE SHOP
					</ListItemButton>
				</ul>
				<ul>
					<ListItemButton
						href="/locations/Center-for-Agroecology-Farmstand"
						className="text-black"
					>
						<ListItemIcon>
							<FoodBankIcon />
						</ListItemIcon>
						CENTER FOR AGROECOLOGY FARMSTAND
					</ListItemButton>
				</ul>
				<ul>
					<ListItemButton href="/About/" className="text-black">
						<ListItemIcon>
							<InfoIcon />
						</ListItemIcon>
						ABOUT US
					</ListItemButton>
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
				<ThemeProvider theme={theme}>
					<AppBar
						color="primary"
						enableColorOnDark="true"
						sx={{ backgroundColor: "#eab308" }}
					>
						<Toolbar>
							<IconButton onClick={toggleDrawer(true)}>
								<MenuIcon></MenuIcon>
							</IconButton>
						</Toolbar>
					</AppBar>
				</ThemeProvider>
			</Box>
			<Drawer className="w-full" open={open} onClose={toggleDrawer(false)}>
				<DrawerInfo />
			</Drawer>
		</>
	);
}
