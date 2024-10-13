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
	Products_offered: ["Coffee", "Tea", "Salad", "Bagels", "Premade food options"],
	Image: "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-1/305264046_451952510284331_4554466830303118072_n.jpg?stp=dst-jpg_s480x480&_nc_cat=106&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=7fpqTt12XGIQ7kNvgHSEVZO&_nc_ht=scontent-sjc3-1.xx&_nc_gid=AoEufj6e_CLzyzF5xJgnYjd&oh=00_AYDHjV2x1TGC84DKaIFrqB8qs14u-I-sD-52etSKR1Qx_Q&oe=671115D2"
	
}

export default function Home(){
	return(<PageTemplate config={facilityConfig} />)

}