/*

"use client";

import { Button } from "@mui/material";
import { usePathname } from "next/navigation";


export default function Home() {
	const pathName = usePathname();
	return (
		<div>	
			<h1 className="text-7xl pt-24 text-center text-green-700" > Redwood Free Market </h1>
			<h1 className="text-3xl pt-40 pl-44" > ABOUT </h1>
			<p className="text-green-500 pt-10 pl-20">The Redwood Free Market is dedicated to decreasing basic needs<br/> 
				insecurity by providing free access to healthy food and<br/> 
				connecting students to campus and community resources.</p>
			<h1 className="p-10 flex justify-center">{pathName}</h1>
			<a href="/">
				<Button variant="outlined">Home</Button>
			</a>
		</div>
	);
}

*/

import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Grid,
    Paper,
    List,
    ListItem,
    ListItemText,
    Box,
    Card,
    CardMedia,
    CardContent,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const App = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" style={{ flexGrow: 1 }}>
                        Facility Name
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container>
                <Grid container spacing={3} style={{ marginTop: "20px" }}>
                    <Grid item xs={12} md={8}>
                        <Paper style={{ padding: "20px" }}>
                            <Typography variant="h5">About</Typography>
                            <Typography>
                                Welcome to our facility! We provide exceptional services and a warm atmosphere for our guests.
                            </Typography>

                            <Typography variant="h5" style={{ marginTop: "20px" }}>Restaurant Hours</Typography>
                            <Typography>Monday to Friday: 9 AM - 10 PM</Typography>
                            <Typography>Saturday: 10 AM - 11 PM</Typography>
                            <Typography>Sunday: Closed</Typography>

                            <Typography variant="h5" style={{ marginTop: "20px" }}>Dishes Served</Typography>
                            <List>
                                <ListItem>
                                    <ListItemText primary="Pasta Primavera" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Grilled Chicken Salad" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Margherita Pizza" />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Chocolate Lava Cake" />
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper style={{ padding: "20px" }}>
                            <Typography variant="h5">Photos</Typography>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="Restaurant Photo 1"
                                    height="140"
                                    image="photo1.jpg" // Replace with your image URL
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Restaurant Photo 1 Description
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="Restaurant Photo 2"
                                    height="140"
                                    image="photo2.jpg" // Replace with your image URL
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Restaurant Photo 2 Description
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="Restaurant Photo 3"
                                    height="140"
                                    image="photo3.jpg" // Replace with your image URL
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        Restaurant Photo 3 Description
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>

                <Box style={{ marginTop: "20px" }}>
                    <Typography variant="h5">FAQ</Typography>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Do you take reservations?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, we recommend making reservations in advance.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Is there a dress code?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Smart casual is appreciated.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Do you offer vegan options?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Yes, we have several vegan dishes available.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Container>
        </div>
    );
};

export default App;
