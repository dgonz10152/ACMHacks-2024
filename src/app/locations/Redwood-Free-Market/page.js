import PageTemplate from "../templateSite/page";

const facilityConfig = {
	Name: "Redwood Free Market",
	Location: "PLACE",
	About: "The Redwood Free Market is dedicated to decreasing basic needs insecurity by providing free access to healthy food and connecting students to campus and community resources.",
	Monday_hours: "2PM - 5PM",
	Tuesday_hours: "9AM - 1PM, 2PM - 5PM",
	Wednesday_hours: "9AM - 1PM, 2PM - 5PM",
	Thursday_hours: "9AM - 1PM, 2PM - 5PM",
	Friday_hours: "9AM - 12PM",
	Saturday_hours: "Closed",
	Sunday_hours: "Closed",
	Products_offered: ["Produce", "Dry goods", "Coffee", "Soap", "Chicken"]
	
}

export default function Home(){
	return(<PageTemplate config={facilityConfig} />)

}