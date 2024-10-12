import PageTemplate from "../templateSite/page";

const facilityConfig = {
	Name: "Womxn's Center Food Pantry",
	Location: "PLACE",
	About: "The UCSC Womxn’s Center affirms the dignity and diversity of all women. The center continues and challenges feminist traditions by creating community space for all women and their allies to achieve individual and social change.",
	Monday_hours: "Closed",
	Tuesday_hours: "10AM - 4PM",
	Wednesday_hours: "Closed",
	Thursday_hours: "10AM - 4PM",
	Friday_hours: "Closed",
	Saturday_hours: "Closed",
	Sunday_hours: "Closed",
	Products_offered: ["Canned foods", "Dry goods"]
	
}

export default function Home(){
	return(<PageTemplate config={facilityConfig} />)

}