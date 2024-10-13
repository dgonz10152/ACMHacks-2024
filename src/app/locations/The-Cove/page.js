import PageTemplate from "../templateSite/page";

const facilityConfig = {
	Name: "The Cove",
	Location: "PLACE",
	About: "The Cove is an all-inclusive community for students recovering from alcohol and/or other drugs, loved ones of those with addictions, allies, and anyone else who supports recovery. We are a diverse group, varying in ages and lengths of sobriety. The Cove is supported by staff and faculty at the university and community members. ",
	Monday_hours: "1PM - 5PM",
	Tuesday_hours: "9AM - 12PM",
	Wednesday_hours: "Remote Service Only",
	Thursday_hours: "9AM - 12PM",
	Friday_hours: "1PM - 5PM",
	Saturday_hours: "Closed",
	Sunday_hours: "Closed",
	Products_offered: [],
	Image: "https://shop.ucsc.edu/students-in-recovery/images/cove-banner.png"
	
}

export default function Home(){
	return(<PageTemplate config={facilityConfig} />)

}
