import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchBox.css'
import { useState } from 'react';
export default function SearchBox(){


  let [city, setCity] = useState("")
 

  let handleChange = (e) =>{
    setCity(e.target.value);
  }



  return(
    <div className='searchBox'>
      <h3>search weather</h3>
      <form>
      <TextField className="text" id="city" label="city Name" variant="outlined" required value={city}
      onChange={handleChange} />
      <br />
      <br />
      <Button variant="contained" type='submit'>Search</Button>
      </form>
    </div>
  )
}