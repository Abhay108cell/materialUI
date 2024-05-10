export default function InforBox(){
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
    </div>
  )
}