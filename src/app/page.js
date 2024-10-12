import * as React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";


function ButtonUsage() {
	return <Button variant="contained">Hello world</Button>;
}

export default function Home() {
	return (
		<>
			<h1 className="p-10 flex justify-center text-red-400">Home Page</h1>
			<a href="/locations">
				<center><Button variant="outlined">Check out our locations</Button></center>
			</a>
			<ul>
				<center><Button href="/About/">ABOUT US</Button></center>
			</ul>
		</>
	);
}
