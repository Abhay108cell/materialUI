import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InforBox(){

      const INit_URL = "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"

  let Info = {
    city: "Meerut",
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
         {Info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <div>Temprature = {Info.temp}&deg;C</div>
         <div>Humidity = {Info.humidity}</div>
         <div>Min. Temprature = {Info.tempMin}&deg;C</div>
         <div>Max. Temprature = {Info.tempMax}&deg;C</div>  
         <div>FeelsLike = {Info.feelsLike}</div>
         <div>weather = {Info.weather}</div>
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}