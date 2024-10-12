"use client";

import { Button } from "@mui/material";
import { usePathname } from "next/navigation";

export default function Home() {
	const pathName = usePathname();
	return (
		<div>
			<h1 className="p-10 flex justify-center">{pathName}</h1>
			<a href="/">
				<Button variant="outlined">Home</Button>
			</a>
		</div>
	);
}
