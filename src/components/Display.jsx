import React, { useState, useEffect } from 'react';
import { Cloud } from 'lucide-react';
import devices from "../utils/device"
import { motion } from "framer-motion"
import Remote from './Remote';


function Display() {
  const [currentDate, setCurrentDate] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState(null);
  const city = 'ranchi'; // Define the city here

  useEffect(() => {
    const fetchDate = () => {
      const dateObj = new Date();
      const formattedDate = `${dateObj.getDate()} ${getMonthName(dateObj.getMonth())} ${dateObj.getFullYear()}`;
      setCurrentDate(formattedDate);
    };
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/weather?city=${city}`, {
          headers: {
            'X-Api-Key': 'bz2Q+xFA0ef9+wNoCoriFg==39InsCVjG6TqJbE2'
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchDate();
    fetchWeatherData();

    const intervalId = setInterval(fetchDate, 1000); 
    return () => clearInterval(intervalId); 
  }, [city],[selectedDevice]); // Make sure to include city in the dependency array
  const getMonthName = (monthIndex) => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return months[monthIndex];
  };

  return (
    <div className="w-3/4 bg-[#000000] h-screen flex ">
      <div className='w-2/3'>
        <div className='h-1/4 flex flex-col items-start justify-end p-4 m-3'>
          <div className='my-7'>
              <span className='text-4xl font-semibold'>Welcome Admins</span>
          </div>
          <div className='flex gap-2'>
            <Cloud />Date: {currentDate}
          </div>
        </div>

        <div className='h-2/6 font-semibold text-lg'>
          <span>Overview</span>
          <div className='h-1/4'>
            {weatherData && (
              <div>
                <span>Weather: {weatherData.weather}</span>
                <span>Temperature: {weatherData.temperature}</span>
                {/* Add more weather data fields as needed */}
              </div>
            )}
            {!weatherData && <span>Loading weather data...</span>}
          </div>
        </div>

        <div className='h-1/6'>
          <span>Devices</span>
          <div className='flex gap-1'>
            {devices.map((device, index) => (
              <motion.div key={index} className="w-1/2 p-4 rounded-lg border-2 h-[200px]">
                <h2 onClick={()=>setSelectedDevice(device)} className="text-lg font-semibold">{device.device}</h2>
                <p>{device.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-1/3 bg-[#ffffff] h-screen p-2'>
        {console.log(selectedDevice)}
            {selectedDevice && <Remote device={selectedDevice}/>}
      </div>
    </div>
  );
}

export default Display;
