import React from "react";
import MenuBar from "../components/MenuBar";
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

function PageTemplate({config}) {
	const foodList = Array.isArray(config.Products_offered) ? config.Products_offered : [];

    const foodsOffered = foodList.map((food, index) => (
        <ListItem key={index} sx={{ padding: '0', marginBottom: "-8px" }}>
            <ListItemText primary={food} /> {/* Each food item is displayed */}
        </ListItem>
    ));

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" style={{ flexGrow: 1 }}>
                        {config.Name}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container>
                <Grid container spacing={3} style={{ marginTop: "20px" }}>
                    <Grid item xs={12} md={8}>
                        <Paper style={{ padding: "20px" }}>
                            <Typography variant="h5">About</Typography>
                            <Typography>
							{config.About}
                            </Typography>

                            <Typography variant="h5" style={{ marginTop: "20px" }}>Facility Hours</Typography>
                            <Typography>Monday: {config.Monday_hours}</Typography>
							<Typography>Tuesday: {config.Tuesday_hours}</Typography>
							<Typography>Wednesday: {config.Wednesday_hours}</Typography>
							<Typography>Thursday: {config.Thursday_hours}</Typography>
							<Typography>Friday: {config.Friday_hours}</Typography>
							<Typography>Saturday: {config.Saturday_hours}</Typography>
							<Typography>Sunday: {config.Sunday_hours}</Typography>

                            <Typography variant="h5" style={{ marginTop: "20px" }}>Products Offered</Typography>
                            <List>
                                {foodsOffered}
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

export default PageTemplate;
