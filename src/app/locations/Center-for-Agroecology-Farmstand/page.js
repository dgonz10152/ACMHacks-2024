import PageTemplate from "../templateSite/page";

const facilityConfig = {
	Name: "Center for Agroecology Farmstand",
	Location: "PLACE",
	About: "Rooted in the Division of Social Sciences at UC Santa Cruz, the Center for Agroecology is an organization of staff, faculty, and students who work to advance agroecology and equitable food systems through experiential education, participatory research, agricultural extension, and public service.",
	Monday_hours: "Closed",
	Tuesday_hours: "Closed",
	Wednesday_hours: "Closed",
	Thursday_hours: "12:30PM - 6PM",
	Friday_hours: "Closed",
	Saturday_hours: "Closed",
	Sunday_hours: "Closed",
	
}

export default function Home(){
	return(<PageTemplate config={facilityConfig} />)

}