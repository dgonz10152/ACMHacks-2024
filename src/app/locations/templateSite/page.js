import React from "react";
import MenuBar from "@/app/components/MenuBar";

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
	AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GetPictures from "@/app/components/GetPictures";

function PageTemplate({ config }) {
	const foodList = Array.isArray(config.Products) ? config.Products : [];

	const foodsOffered = foodList.map((food, index) => (
		<ListItem key={index} sx={{ padding: "0", marginBottom: "-8px" }}>
			<ListItemText primary={food} />
		</ListItem>
	));

	return (
		<div>
			<MenuBar />
			<AppBar className="pt-[7vh]" position="static">
				<Toolbar>
					<Typography
						variant="h4"
						style={{ flexGrow: 1 }}
						className="flex justify-center"
					>
						{config.Name}
					</Typography>
				</Toolbar>
			</AppBar>

			<Container>
				<Grid container spacing={3} style={{ marginTop: "20px" }}>
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
									<Typography variant="body2" color="text.secondary"></Typography>
								</CardContent>
							</Card>
						</Paper>
					</Grid>

					{/* Facility Info */}
					<Grid item xs={12}>
						<Paper style={{ padding: "20px" }}>
							<Typography variant="h5">About</Typography>
							<Typography>{config.About}</Typography>

							<Typography variant="h5" style={{ marginTop: "20px" }}>
								Facility Hours
							</Typography>
							<Typography>Monday: {config.MondayHours}</Typography>
							<Typography>Tuesday: {config.TuesdayHours}</Typography>
							<Typography>Wednesday: {config.WednesdayHours}</Typography>
							<Typography>Thursday: {config.ThursdayHours}</Typography>
							<Typography>Friday: {config.FridayHours}</Typography>
							<Typography>Saturday: {config.SaturdayHours}</Typography>
							<Typography>Sunday: {config.SundayHours}</Typography>

							<Typography variant="h5" style={{ marginTop: "20px" }}>
								Products Offered
							</Typography>
							<List>{foodsOffered}</List>
						</Paper>
					</Grid>
				</Grid>

				{/* Photos Section */}
				<Grid container spacing={3} style={{ marginTop: "20px" }}>
					<Grid item xs={12} md={4}>
						<Paper style={{ padding: "20px" }}>
							<Typography variant="h5">Current Food</Typography>
							<GetPictures location={config.Name} />
						</Paper>
					</Grid>
				</Grid>

				{/* FAQ Section */}
				{/* <Box style={{ marginTop: "20px" }}>
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
							<Typography>Smart casual is appreciated.</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography>Do you offer vegan options?</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>Yes, we have several vegan dishes available.</Typography>
						</AccordionDetails>
					</Accordion>
				</Box> */}
			</Container>
		</div>
	);
}

export default PageTemplate;
