import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css'
import { useState } from 'react';
export default function SearchBox(){
  let [city, setCity] = useState("")
const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
const API_KEY = "33e9fd0eae31269d009ffe0568ac847d"

let getWheatherInfo = async ()=>{
 let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)
 let data = await response.json()
 console.log(data)

}

 

  let handleChange = (e) =>{
    setCity(e.target.value);
  }

  let handleSubmit = (e)=>{
    e.preventDefault();
    console.log(city);
    setCity("")
      }

  return(
    <div className='searchBox'>
      <h3>search weather</h3>
      <form onSubmit={handleSubmit}>
      <TextField className="text" id="city" label="city Name" variant="outlined" required value={city}
      onChange={handleChange} />
      <br />
      <br />
      <Button variant="contained" type='submit'>Search</Button>
      </form>
    </div>
  )
}