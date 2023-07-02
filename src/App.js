import React, { useState } from "react";
import './App.css';
import ToDoList from './components/ToDoList';
import { createContext } from "react";
import {BsFillSunFill, BsFillMoonFill} from 'react-icons/bs';
import Weather from "./components/Weather";
import WeatherDetails from "./components/WeatherDetails";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('light');
  
  const [icon, setIcon] = useState("sun");

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    setIcon((prevIcon) => (prevIcon === "sun" ? "moon" : "sun"));
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [openWeather, setOpenWeather] = useState(false);
  const handleOpenWeather = () => setOpenWeather(true);
  const handleCloseWeather = () => setOpenWeather(false);


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        <div className='todo-header'>
            <div className='weather' onClick={handleOpenWeather}>
                <Weather />
            </div>
            <Modal
                open={openWeather}
                onClose={handleCloseWeather}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <WeatherDetails />
                </Box>
            </Modal>
            <div className='theme' onClick={toggleTheme}>
                <h3>Theme</h3>
                {icon === "sun" ? <BsFillSunFill  style={{ color: "#000" }}/> : <BsFillMoonFill style={{ color: "#fff" }} />}
            </div>
        </div>
        <ToDoList/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
