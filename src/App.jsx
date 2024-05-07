import { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css'

function App() {
  let handleClick=()=>{
    alert("You clicked the button!");
  }

  return (
    <>
    <h1>Material UI</h1>
    <Button variant="contained" onClick={handleClick} startIcon={<DeleteIcon />}>Delete</Button>
    <Button variant="contained" onClick={handleClick}  color="success"  >Click Me 2</Button>
    
    </>
  )
}

export default App
