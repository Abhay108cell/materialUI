import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css'

export default function InfoBox({Info}){

      const INit_URL = "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"

      const HOT_URL = "https://images.unsplash.com/photo-1577985759186-0854dfd3f218?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
      const COLD_URL = "https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q09MRCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
      const RAINY_URL = "https://images.unsplash.com/photo-1536329978773-2f8ac431f330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww"
  
  return(
    <div className="InfoBox">
      <h3>WheaterInfo - {Info.weather}</h3>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Info.humidity > 80 ? RAINY_URL : Info.temp>15 ? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {Info.city}
          {Info.humidity > 80 ? <ThunderstormIcon/> : Info.temp>15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
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