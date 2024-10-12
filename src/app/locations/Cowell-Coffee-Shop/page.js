import PageTemplate from "../templateSite/page";

const facilityConfig = {
	Name: "Cowell Coffee Shop",
	Location: "PLACE",
	About: "The Cowell Coffee Shop: For the Peoples is part of the Center's student leadership development model and serves as a cafe designed to increase student food access and support with basic needs resources. The Center's basic needs collaborations seek to put together online curriculum, workshops, conversations around food insecurity, and cooking classes designed specifically around the UCSC food system. The Center for Agroecology and Colleges, Housing and Educational Services have partnered to transform the Cowell Coffee Shop into a non-transactional cafe.",
	Monday_hours: "10AM - 3:30PM",
	Tuesday_hours: "10AM - 3:30PM",
	Wednesday_hours: "10AM - 3:30PM",
	Thursday_hours: "10AM - 3:30PM",
	Friday_hours: "10AM - 3:30PM",
	Saturday_hours: "Closed",
	Sunday_hours: "Closed",
	Products_offered: ["Coffee", "Tea", "Salad", "Bagels", "Premade food options"]
	
}

export default function Home(){
	return(<PageTemplate config={facilityConfig} />)

}