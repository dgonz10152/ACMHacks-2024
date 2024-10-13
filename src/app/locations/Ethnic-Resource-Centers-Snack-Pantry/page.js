import PageTemplate from "../templateSite/page";

const facilityConfig = {
	Name: "Ethnic Resource Centers Snack Pantry",
	Location: "PLACE",
	About: "The Ethnic Resource Centers are dedicated to combating food insecurity and are proud to host a pantry with healthy snacks and dry goods for UCSC students. It is open Mon-Fri from 10 AM-4 PM just check in with the front desk!",
	Monday_hours: "10AM - 4PM",
	Tuesday_hours: "10AM - 4PM",
	Wednesday_hours: "10AM - 4PM",
	Thursday_hours: "10AM - 4PM",
	Friday_hours: "10AM - 4PM",
	Saturday_hours: "Closed",
	Sunday_hours: "Closed",
	Products_offered: ["meals", "snacks", "condiments", "drinks"],
	Image: "https://resourcecenters.ucsc.edu/images/snack-pantry-instagram.png"
	
}

export default function Home(){
	return(<PageTemplate config={facilityConfig} />)

}
