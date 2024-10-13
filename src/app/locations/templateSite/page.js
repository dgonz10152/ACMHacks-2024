import React from "react";
<<<<<<< HEAD
import MenuBar from "@/app/components/MenuBar"
=======
import MenuBar from "../components/MenuBar";
>>>>>>> 664749eeae22bc82af6cecdab3384c782dfd222a
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
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function PageTemplate({ config }) {
    const foodList = Array.isArray(config.Products_offered) ? config.Products_offered : [];

    const foodsOffered = foodList.map((food, index) => (
        <ListItem key={index} sx={{ padding: '0', marginBottom: "-8px" }}>
            <ListItemText primary={food} />
        </ListItem>
    ));

    return (
        <div>
            <MenuBar></MenuBar>
            <AppBar className="pt-[5vh]" position="static">
                <Toolbar>
                    <Typography variant="h4" style={{ flexGrow: 1 }} className="flex justify-center">
                        {config.Name}
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container>
                <Grid container spacing={3} style={{ marginTop: "20px" }}>
                    {/* Image Section (now at the top) */}
                    <Grid item xs={12}>
                        <Paper style={{ padding: "20px" }}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    alt="Restaurant Logo"
                                    height="300"
                                    image={config.Image}
                                    
                                    title="Restaurant Logo"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Paper>
                    </Grid>

                    {/* Facility Info */}
                    <Grid item xs={12}>
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
                </Grid>

                {/* Photos Section */}
                <Grid container spacing={3} style={{ marginTop: "20px" }}>
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

                {/* FAQ Section */}
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
}

export default PageTemplate;