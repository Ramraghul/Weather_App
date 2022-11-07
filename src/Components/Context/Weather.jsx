import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';

let Weather = createContext()

export const WeatherProvider = ({ children }) => {

    //Alert function;
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

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
            Toast.fire({ icon: 'error', title: 'Enter the valid City Name' })
        }
    }
    return (
        <Weather.Provider value={{ Rain, setRain, change }}>
            {children}
        </Weather.Provider>
    )
}


export default Weather;