import PageTemplate from "../templateSite/page";

const facilityConfig = {
	Name: "Lionel Cantu Queer Center Food Pantry",
	Location: "PLACE",
	About: "The Cantú Food Pantry was designed for all hungry students on campus, and specifically with queer and trans students in mind. We offer a self-service pantry stocked with food staples as well as snacks, refrigerated and frozen items. We also welcome and appreciate donations of Capri Suns, Small Chip Bags, Granola Bars, and Ramen!",
	Monday_hours: "Closed",
	Tuesday_hours: "10AM - 5PM",
	Wednesday_hours: "10AM - 5PM",
	Thursday_hours: "10AM - 5PM",
	Friday_hours: "10AM - 5PM",
	Saturday_hours: "Closed",
	Sunday_hours: "Closed",
	Products_offered: ["Produce", "Snacks", "Frozen items"]
	
}

export default function Home(){
	return(<PageTemplate config={facilityConfig} />)

}
