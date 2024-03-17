import React, { useState, useEffect } from 'react';
import { Cloud } from 'lucide-react';
import devices from "../utils/device"
import { motion } from "framer-motion"


function Display() {
  const [currentDate, setCurrentDate] = useState('');
  const [weatherData, setWeatherData] = useState(null);
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
  }, [city]); // Make sure to include city in the dependency array

  const getMonthName = (monthIndex) => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return months[monthIndex];
  };

  return (
    <div className="w-3/4 bg-[#000000] h-screen flex ">
      <div className=' w-2/3 p-4'>
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
          {/* <div className='h-1/4'>
            {weatherData && (
              <div>
                <span>Weather: {weatherData.sunrise}</span>
                <span>Temperature: {weatherData.temp}</span>
              </div>
            )}
            {!weatherData && <span>Loading weather data...</span>}
          </div> */}
          <div className='flex gap-2 pt-5 h-[150px] px-4'>
            <div className='w-1/3 border-2 rounded-full flex flex-col items-center justify-center p-3'>
              <span>Devices connected</span>
              <span className='font-bold text-5xl'>4</span>
            </div>
            <div className='w-2/3 border-2 rounded-full bg-[#98fb98]'></div>
          </div>
        </div>

        <div className='h-1/6'>
          <span className=' text-lg pb-5'>Devices</span>
          <div className='pt-5 flex gap-1'>
            {devices.map((device, index) => (
              <motion.div key={index} className="bg-black w-1/2 p-4 rounded-lg border-2 h-[200px] " 
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}>
                <h2 className="text-lg font-semibold">{device.device}</h2>
                <p>{device.description}</p>
                {/* Add more details as needed */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className='w-1/3 bg-[#000000e4] h-screen p-2 '>
          hi
      </div>
    </div>
  );
}

export default Display;
