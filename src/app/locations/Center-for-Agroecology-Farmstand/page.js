import PageTemplate from "../templateSite/page";

const facilityConfig = {
	Name: "Center for Agroecology Farmstand($)",
	Location: "PLACE",
	About: "Rooted in the Division of Social Sciences at UC Santa Cruz, the Center for Agroecology is an organization of staff, faculty, and students who work to advance agroecology and equitable food systems through experiential education, participatory research, agricultural extension, and public service.",
	Monday_hours: "Closed",
	Tuesday_hours: "Closed",
	Wednesday_hours: "Closed",
	Thursday_hours: "12:30PM - 6PM",
	Friday_hours: "Closed",
	Saturday_hours: "Closed",
	Sunday_hours: "Closed",
	Something: "hi",
	Products_offered: ["Vegetables", "Fruits", "Flowers"],
	Image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/247318688_4620237097996639_9215880347317424199_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=TUg0DL8xnXkQ7kNvgFaLdQv&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AcW6mRyuBPSPmm7S48FhIgU&oh=00_AYBaHbLBXWYdePtdAEa17YsX0u1LV1RDGmgC7K-ckTQ5pw&oe=671129EC"
	
}

export default function Home(){
	return(<PageTemplate config={facilityConfig} />)

}