import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'
export default function WeatherApp(){
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Selhi",
    temp: 25.05,
    tempMin : 25.05,
    tempMax : 25.05,
    humidity:47,
    feelsLike: 24.84, 
    weather: "haze",
  })

  let updateInfo = (result)=>{
    setWeatherInfo(result)
  }

  return(
    <div style={{textAlign: "centre"}}>
      <h2>Weather App by Me</h2>
      <SearchBox updateInfo={updateInfo}/>
      <br />
      <InfoBox Info={weatherInfo}/>
      </div>
  )
}