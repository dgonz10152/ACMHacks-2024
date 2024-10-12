import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Grid2'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';

export default function Home(){
    return(
    <div className="absolute inset-0 bg-green-500 w-full h-full z-0">
       
        <section className="relative flex justify-center items-center h-48 m-6"> 
            <div className="absolute inset-0 bg-white w-full h-full rounded-lg z-0">
                <Typography variant="h1">
                    <h1 className="p-10 flex justify-center text-" style={{fontFamily:'Monaco, "Courier New", monospace'}}>ABOUT US</h1>
                </Typography>
            </div>
        </section>
       
        <section className ="m-6">
            <Grid2 container spacing={4}>
                <Grid2 size={4}>
                    <Paper>1</Paper>
                </Grid2>
                <Grid2 size={4}>
                    <Paper>2</Paper>
                </Grid2>
                <Grid2 size={4}>
                    <Paper>3</Paper>
                </Grid2>
            </Grid2>
        </section>

    </div>
        
    );
}