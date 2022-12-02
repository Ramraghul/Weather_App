import React, { useContext } from 'react';
import Weather from '../Context/Weather';
import './Home.css'
import Search from './Search';

function Home() {

  let getData = useContext(Weather)
  let data = getData.change
  const name = getData.change.name;
  const climate = data && data.weather[0].main;
  const icon = data && data.weather[0].icon;
  const temp = data && data.main.temp;
  const speed = data && data.wind.speed;
  const humidity = data && data.main.humidity;

  // old IMage Url =https://source.unsplash.com/1600x1600/?  https://picsum.photos/1600/1400?
  
  return (
    <>
    <div className='back' style={{backgroundImage:`url('https://source.unsplash.com/1600x1600/?${name}')`}}>
    <div className="card"  >
        <Search></Search>
        <div className="weather loading">
          <h2 className="city">Weather in {name} </h2>
          <h1 className="temp">{temp}°C</h1>
          <div className="flex">
            <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="" className="icon" />
            <div className="description">{climate}</div>
          </div>
          <div className="humidity">Humidity: {humidity}%</div>
          <div className="wind">Wind speed: {speed} km/h</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home