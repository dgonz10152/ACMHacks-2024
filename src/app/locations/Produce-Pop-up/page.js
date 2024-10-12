import PageTemplate from "../templateSite/page";

const facilityConfig = {
	Name: "Produce Pop Up($)",
	Location: "PLACE",
	About: "Low-cost produce stand with fresh fruits & veggies from the UCSC Farm & Santa Cruz Farmers' Market. The Produce Pop-Up aims to increase access to fresh, nutritious food for students and the campus community.Cash, check, card & EBT accepted. ",
	Monday_hours: "Closed",
	Tuesday_hours: "Closed",
	Wednesday_hours: "11AM - 3PM",
	Thursday_hours: "Closed",
	Friday_hours: "11AM - 3PM",
	Saturday_hours: "Closed",
	Sunday_hours: "Closed",
	Products_offered: ["Fresh fruits", "Fresh veggies"]
	
}

export default function Home(){
	return(<PageTemplate config={facilityConfig} />)

}