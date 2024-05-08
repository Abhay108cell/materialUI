import TextField from '@mui/material/TextField';

export default function SearchBox(){
  return(
    <div>
      <h3>search weather</h3>
      <form>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </div>
  )
}