import React, { useContext} from 'react';
import Weather from '../Context/Weather';
import './Home.css'
import Search from './Search';

function Home() {
  let getData = useContext(Weather)
  console.log(getData);
  const name  = getData.change.name;
  // const climate = getData.change.weather[0].main
  // const temp = getData.change.main.temp

  return (
    <>
      <div className="card">
        <Search></Search>
          <div className="weather loading">
            <h2 className="city">Weather in {name} </h2>
            <h1 className="temp">{}°C</h1>
            <div className="flex">
              <img src="https://openweathermap.org/img/wn/04n.png" alt="" className="icon" />
              <div className="description">{}</div>
            </div>
            <div className="humidity">Humidity: 60%</div>
            <div className="wind">Wind speed: 55 km/h</div>
          </div>
      </div>
    </>
  )
}

export default Home