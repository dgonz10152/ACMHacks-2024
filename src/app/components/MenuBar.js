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
      <Typography variant="h5"style={{ fontFamily: 'Monaco, "Courier New", monospace' }}>
        Basic Needs Facilities
      </Typography>
      <Divider />
      <List className="p-3 m-2">
        <ul>	
          <ListItemButton href="/About/" className="text-black" >
		  <ListItemIcon>
		  <InfoIcon />
		  </ListItemIcon>
		  ABOUT US
          </ListItemButton>
        </ul>
        <ul>
          <Button href="/" className="text-black">
            HOME
          </Button>
        </ul>
        <ul>
          <Button href="/locations/The-Cove" className="text-black">
            THE-COVE
          </Button>
        </ul>
		<ul>
          <Button href="/locations/Womxn's-Center-Food-Pantry" className="text-black">
            WOMXNS CENTER FOOD PANTRY
          </Button>
        </ul>
		<ul>
          <Button href="/locations/Terry-Freitas-Commons" className="text-black">
            TERRY FREITAS COMMON
          </Button>
        </ul>
		<ul>
          <Button href="/locations/Redwood-Free-Market" className="text-black">
            REDWOOD FREE MARKET
          </Button>
        </ul>
		<ul>
          <Button href="/locations/Produce-Pop-Up" className="text-black">
            PRODUCE POP UP
          </Button>
        </ul>
		<ul>
          <Button href="/locations/Lionel-Cantu-Queer-Center-Food-Pantry" className="text-black">
            LIONEL CANTU QUEER CENTER FOOD PANTRY
          </Button>
        </ul>
		<ul>
          <Button href="/locations/Ethnic-Resource-Centers-Snack-Pantry" className="text-black">
            ETHNIC RESOURCE CENTERS SNACK PANTRY
          </Button>
        </ul>
		<ul>
          <Button href="/locations/Cowell-Coffee-Shop" className="text-black">
            COWELL COFFEE SHOP
          </Button>
        </ul>
		<ul>
          <Button href="/locations/Center-for-Agroecology-Farnmstand" className="text-black">
            CENTER FOR AGROECOLOGY FARMSTAND
          </Button>
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
