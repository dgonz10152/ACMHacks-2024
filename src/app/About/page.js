import Typography from "@mui/material/Typography";
import Grid2 from "@mui/material/Grid2";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import MenuBar from "../components/MenuBar";
import { Box } from "@mui/system";


export default function Home() {
  return (
    <>
      <MenuBar></MenuBar>
      <div className="inset-0 bg-blue-400 w-full h-100 z-full">
        <section className="relative flex justify-center items-center h-48 m-6">
          <div className="absolute inset-0 bg-white w-full h-full rounded-lg z-0">
            <Typography
              variant="h1"
              className="p-10 flex justify-center text-black"
              style={{ fontFamily: 'Monaco, "Courier New", monospace' }}
            >
              ABOUT US
            </Typography>
          </div>
        </section>

        <section className="m-6">
          <Grid2 container spacing={4}>
            <Grid2 size={4}>
              <Paper elevation={12}>
                <center>
                  <p
                    className="p-5 flex justify-center  text-black"
                    style={{ fontFamily: 'Monaco, "Courier New", monospace' }}
                  >
                    THE PROBLEM:
                  </p>
                </center>
                <Box
                  variant="body1"
                  style={{ fontFamily: 'Monaco, "Courier New", monospace' }}
                >
                  <div className="m-2 p-3">
                    <ul>
                    Have you ever heard of UCSC’s basic needs facilities? There’s a chance many of you haven’t. Despite providing vital sources of food and housing assistance, awareness about them is inadequate. They function as safety nets, aiming to ensure that all students irrespective of their financial status get their basic needs met. Basic needs facilities function as food pantries, emergency housing, financial aid, and wellness programs all at once.
                    Our team member Eric currently works at the Redwood Free Market, giving him a unique understanding of the situation. Currently, there is a vast demand to know whether or when these facilities have a certain item, but no such functionality exists. Moreover, there are nine of these sites on campus, which are generally greatly underutilized. People are confused to as what these facilities are, where they are, and what they have to offer. You’d be surprised how many people give up on food pantries simply because they’re hard to find.
                    </ul>
                  </div>
                </Box>
              </Paper>
            </Grid2>
            <Grid2 size={4}>
              <Paper elevation={12}>
                <center>
                  <p
                    className="p-5 flex justify-center  text-black"
                    style={{ fontFamily: 'Monaco, "Courier New", monospace' }}
                  >
                    THE SOLUTION:
                  </p>
                </center>
                <Box
                  variant="body1"
                  style={{ fontFamily: 'Monaco, "Courier New", monospace' }}
                >
                  <div className="m-2 p-3">
                    <ul>
                    To remedy these issues, our team (JEDY) created a webpage with one sole purpose- a one-stop shop for ALL things Basic Needs related. Our goals are to:
                    </ul>
                    <li>
                    Raise awareness about available resources and services for students in need.
                    </li>
                    <li>
                    Foster support for the community by connecting users with assistance programs.
                    </li>
                    <li>
                    Provide easy access to information about location, hours, and eligibility.
                    </li>
                    <li>
                    Encourage engagement via donations, volunteering, and partnerships to enhance services.
                    </li>
                    <li>
                    Offer additional educational resources on environmental wellness tips and self-care strategies to empower students to make informed decisions about their well-being.
                    </li>
                  </div>
                </Box>
              </Paper>
            </Grid2>
            <Grid2 size={4}>
              <Paper elevation={12}>
                <center>
                  <p
                    className="p-5 flex justify-center  text-black"
                    style={{ fontFamily: 'Monaco, "Courier New", monospace' }}
                  >
                    Relation to Sustainability and Social Good:
                  </p>
                </center>
                <Box
                  variant="body1"
                  style={{ fontFamily: 'Monaco, "Courier New", monospace' }}
                >
                  <div className="m-2 p-3">
                    <ul>
                    Food and other basic needs insecurities are a bigger problem than the university is willing to admit. The Redwood Free Market alone received more than 11,000 visits last year alone, and is growing at a rapid rate. Nonetheless, there is leftover food that could go to students. Our app makes the UCSC basic needs program easy to navigate, helping people previously unaware of these resources. Additionally, it would save gas that would otherwise be used to make trips to Safeway or other grocery stores. It also provides a way for people with extra food to easily donate it instead of throwing it away. We’re all probably guilty of throwing away goods we didn’t need simply because we couldn’t find a convenient way to donate them.
                    </ul>
                  </div>
                </Box>
              </Paper>
            </Grid2>
          </Grid2>
        </section>
      </div>
    </>
  );
}
