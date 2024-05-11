import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function InforBox(){

      const INit_URL = "https://unsplash.com/photos/a-desert-scene-with-a-few-buildings-in-the-distance-U8iSiJrkbhQ"

  let Info = {
    temp: 25.05,
    tempMin : 25.05,
    tempMax : 25.05,
    humidity:47,
    feelsLike: 24.84, 
    weather: "haze",
  }
  return(
    <div className="InfoBox">
      <h3>WheaterInfo - {Info.weather}</h3>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INit_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}