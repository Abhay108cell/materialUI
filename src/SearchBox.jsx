import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css'
import { useState } from 'react';
// import InfoBox from './InfoBox';
export default function SearchBox({updateInfo}){
  let [city, setCity] = useState("")
  let [error, seterror] = useState(false)


const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "33e9fd0eae31269d009ffe0568ac847d"

let getWheatherInfo = async ()=>{

  try{
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let data = await response.json()
    console.log(data)
    let result = {
     city: city,
      temp: data.main.temp,
      tempMin : data.main.temp_min,
      tempMax : data.main.temp_max,
      humidity:data.main.humidity,
      feelsLike: data.main.feels_like, 
      weather: data.weather[0].description,
    }
    console.log(result);
    return result
  }catch(err){
    throw err;
    }
} 
  let handleChange = (e) =>{
    setCity(e.target.value);
  }
  let handleSubmit =  async(e)=>{
    try{
      e.preventDefault();
      console.log(city);
      setCity("")
     let info = await getWheatherInfo()
     updateInfo(info)
    } catch(err){
      seterror(true)
    }
      }
  return(
    <div className='searchBox'>
      {/* <h3>search weather</h3> */}
      <form onSubmit={handleSubmit}>
      <TextField className="text" id="city" label="city Name" variant="outlined" required value={city}
      onChange={handleChange} />
      <br />
      <br />
      <Button variant="contained" type='submit'>Search</Button>
      {error && <p>No Such Place Exists!</p>}
      </form>

         {/* <InfoBox/> */}

    </div>
  )
}