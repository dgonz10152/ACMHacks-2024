import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Grid2'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import MenuBar from "../components/MenuBar"

export default function Home(){
    return(
    <>
    <MenuBar></MenuBar>
    <div className="absolute inset-0 bg-blue-500 w-full h-full z-0">
       
        <section className="relative flex justify-center items-center h-48 m-6"> 
            <div className="absolute inset-0 bg-white w-full h-full rounded-lg z-0">
                <Typography variant="h1" className="p-10 flex justify-center text-black" style={{fontFamily:'Monaco, "Courier New", monospace'}}>
                    ABOUT US
                </Typography>
            </div>
        </section>
       
        <section className ="m-6">
            <Grid2 container spacing={4}>
                <Grid2 size={4}>
                    <Paper elevation={12}>
                    <center><p1 className="p-5 flex justify-center  text-black" style={{fontFamily:'Monaco, "Courier New", monospace'}}>
                            Who we are:
                        </p1></center>
                    <Typography variant="body1" style={{fontFamily:'Monaco, "Courier New", monospace'}}>
                            <section className="m-2 p-3">
                            <li>
                            Have you heard of Basic Needs Facilities on campus? Did you know we have 9 locations on the UCSC campus? Our guess is not yet. Spanning from 1st year to 3rd, JETY is a four person group with the like-minded goal of creating a one stop place for 
                            all things Basic Needs related. Being students ourselves, we would've loved having a resource where we could connect to these facilities. 
                            </li>
                            <li>
                            Daniel Gonzalez
                            </li>
                            <li>
                            Eric Honer
                            </li>
                            <li>
                            Jerry Zhan
                            </li>
                            </section>
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2 size={4}>
                    <Paper elevation={12}>
                       <center><p1 className="p-5 flex justify-center  text-black" style={{fontFamily:'Monaco, "Courier New", monospace'}}>
                            Our Goals:
                        </p1></center>
                        <Typography variant="body1" style={{fontFamily:'Monaco, "Courier New", monospace'}}>
                            <section className="m-2 p-3">
                            <li>
                            Awareness: Raise awareness about available resources and services for students in need.
                            </li>
                            <li>
                            Support: Foster a supportive community by connecting users with assistance programs.
                            </li>
                            <li>
                            Accessibility: Provide easy access to information about location, hours, and eligibility.
                            </li>
                            <li>
                            Engagement: Encourage donations, volunteering, and partnerships to enhance services.
                            </li>
                            <li>
                            The website offers educational resources on environmental wellness tips and self-care strategies to empower students to make informed decisions about their well-being.
                            </li>
                            </section>
                        </Typography>
                    </Paper>
                </Grid2>
                <Grid2 size={4}>
                    <Paper elevation={12}>
                    <center>
                        <p1 className="p-5 flex justify-center  text-black" style={{fontFamily:'Monaco, "Courier New", monospace'}}>
                            What are BNFs:
                        </p1></center>
                        <Typography variant="body1" style={{fontFamily:'Monaco, "Courier New", monospace'}}>
                            <section className="m-2 p-3">
                            <li>
                            Basic Needs Facilities provide essential resources to support students’ well-being, including food, housing assistance, and other necessities.
                            </li>
                            <li>
                            They are typically available to all students, regardless of their financial status, aiming to ensure that everyone has access to basic needs.
                            </li>
                            <li>
                            Services may include food pantries, emergency housing, financial aid, and wellness programs.                            
                            </li>
                            <li>
                            Donations can often be made directly through the facility’s website or by contacting them for specific needs.
                            </li>
                            </section>
                        </Typography>
                    </Paper>
                </Grid2>
            </Grid2>
        </section>
    </div>
    </>
    );
}