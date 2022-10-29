import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Page/Home';
import { WeatherProvider } from './Components/Context/Weather';


function App() {
  return (
    <>
    <BrowserRouter>
    <WeatherProvider>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </WeatherProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
