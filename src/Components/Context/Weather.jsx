import axios from "axios";
import { createContext, useEffect, useState } from "react";

let Weather = createContext()

export const WeatherProvider = ({ children }) => {

    //Starting Data
    const [Rain, setRain] = useState("Bengaluru")
    const [change, setChange] = useState("")

    useEffect(() => {
        climate()
    }, [])

    useEffect(() => {
        climate()
    }, [Rain])

    //Data Fetching
    let climate = async () => {
        try {
            let detail = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Rain}&units=metric&appid=ffbfd88caed1d1c95eee16d3a6180cfd`)
            setChange(detail.data)
        } catch (error) {
            alert("city not found")
        }
    }
    return (
        <Weather.Provider value={{ Rain, setRain, change }}>
            {children}
        </Weather.Provider>
    )
}


export default Weather