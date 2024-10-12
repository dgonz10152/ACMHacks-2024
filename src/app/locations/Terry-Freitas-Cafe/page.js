import PageTemplate from "../templateSite/page";

const facilityConfig = {
	Name: "Terry Freitas Cafe",
	Location: "PLACE",
	About: "Terry Freitas Commons (TFC) is a fully student-led organization that serves as a lounge and food pantry for all students. TFC also provides a welcoming space for people to study, have meetings, and socialize through playing pool, piano, and games. TFC has had a long legacy as an organization that is by the students and for the students. It was created to provide a welcoming space for students to connect, play pool, express themselves, explore social justice on a global level, and study. (collegenine.ucsc.edu)",
	Monday_hours: "9AM - 1PM",
	Tuesday_hours: "9AM - 1PM",
	Wednesday_hours: "9AM - 1PM",
	Thursday_hours: "9AM - 1PM",
	Friday_hours: "9AM - 1PM",
	Saturday_hours: "1PM - 1AM (Next Day)",
	Sunday_hours: "1PM - 6PM, 9PM - 1AM (Next Day)",
	Products_offered: []
	
}

export default function Home(){
	return(<PageTemplate config={facilityConfig} />)

}
