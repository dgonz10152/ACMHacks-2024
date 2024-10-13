import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import MenuBar from "../components/MenuBar";
import { Box } from "@mui/system";
import { useMediaQuery } from "@mui/material";

export default function Home() {
	const isMobile = useMediaQuery("(max-width:600px)");

	return (
		<>
			<MenuBar />
			<div className="absolute inset-0 bg-blue-500 w-full h-full z-0">
				{/* ABOUT US Section */}
				<section className="relative flex justify-center items-center h-48 m-6">
					<div className="absolute inset-0 bg-white w-full h-full rounded-lg z-0">
						<Typography
							variant={isMobile ? "h4" : "h1"}
							className="p-10 flex justify-center text-black"
							style={{
								fontFamily: 'Monaco, "Courier New", monospace',
								textAlign: "center",
							}}
						>
							ABOUT US
						</Typography>
					</div>
				</section>

				{/* Information Sections */}
				<section className="m-6">
					<Grid2 container spacing={4}>
						{/* Who We Are Section */}
						<Grid2 xs={12} sm={6} md={4}>
							<Paper elevation={12}>
								<center>
									<Typography
										className="p-5 text-black"
										style={{ fontFamily: 'Monaco, "Courier New", monospace' }}
									>
										Who we are:
									</Typography>
								</center>
								<Box
									style={{
										fontFamily: 'Monaco, "Courier New", monospace',
										padding: isMobile ? "10px" : "20px",
									}}
								>
									<ul className="m-2 p-3">
										<li>
											Have you heard of Basic Needs Facilities on campus? Did you know we
											have 9 locations on the UCSC campus? Our guess is not yet. Spanning
											from 1st year to 3rd, JETY is a four person group with the
											like-minded goal of creating a one stop place for all things Basic
											Needs related.
										</li>
										<li>Daniel Gonzalez</li>
										<li>Eric Honer</li>
										<li>Jerry Zhan</li>
									</ul>
								</Box>
							</Paper>
						</Grid2>

						{/* Our Goals Section */}
						<Grid2 xs={12} sm={6} md={4}>
							<Paper elevation={12}>
								<center>
									<Typography
										className="p-5 text-black"
										style={{ fontFamily: 'Monaco, "Courier New", monospace' }}
									>
										Our Goals:
									</Typography>
								</center>
								<Box
									style={{
										fontFamily: 'Monaco, "Courier New", monospace',
										padding: isMobile ? "10px" : "20px",
									}}
								>
									<ul className="m-2 p-3">
										<li>
											Awareness: Raise awareness about available resources and services for
											students in need.
										</li>
										<li>
											Support: Foster a supportive community by connecting users with
											assistance programs.
										</li>
										<li>
											Accessibility: Provide easy access to information about location,
											hours, and eligibility.
										</li>
										<li>
											Engagement: Encourage donations, volunteering, and partnerships to
											enhance services.
										</li>
										<li>
											The website offers educational resources on environmental wellness
											tips and self-care strategies to empower students.
										</li>
									</ul>
								</Box>
							</Paper>
						</Grid2>

						{/* What are BNFs Section */}
						<Grid2 xs={12} sm={6} md={4}>
							<Paper elevation={12}>
								<center>
									<Typography
										className="p-5 text-black"
										style={{ fontFamily: 'Monaco, "Courier New", monospace' }}
									>
										What are BNFs:
									</Typography>
								</center>
								<Box
									style={{
										fontFamily: 'Monaco, "Courier New", monospace',
										padding: isMobile ? "10px" : "20px",
									}}
								>
									<ul className="m-2 p-3">
										<li>
											Basic Needs Facilities provide essential resources to support
											students’ well-being.
										</li>
										<li>
											They are available to all students, regardless of financial status.
										</li>
										<li>
											Services include food pantries, emergency housing, financial aid, and
											wellness programs.
										</li>
										<li>
											Donations can often be made through the facility's website or by
											contacting them directly.
										</li>
									</ul>
								</Box>
							</Paper>
						</Grid2>
					</Grid2>
				</section>
			</div>
		</>
	);
}
