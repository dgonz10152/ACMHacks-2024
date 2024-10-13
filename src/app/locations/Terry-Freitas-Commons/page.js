"use client";

import PageTemplate from "../templateSite/page";
import { db } from "@/app/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

async function fetchDataFromFirestore() {
	const querySnapshot = await getDocs(collection(db, "locationData"));
	const data = [];
	querySnapshot.forEach((doc) => {
		data.push({ id: doc.id, ...doc.data() });
	});
	return data;
}

export default function Home() {
	const [loading, setLoading] = useState(true);
	const [facilityConfig, setFacilityConfig] = useState(null);
	useEffect(() => {
		async function fetchData() {
			const data = await fetchDataFromFirestore();
			data.forEach((location) => {
				if (location.Name == "Terry Freitas Commons") {
					setFacilityConfig(location);
					setLoading(false);
				}
			});
		}
		fetchData();
	}, []);

	return <>{loading ? <div></div> : <PageTemplate config={facilityConfig} />}</>;
}
