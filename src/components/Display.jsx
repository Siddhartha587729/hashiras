import React, { useState, useEffect } from 'react';
import { Cloud } from 'lucide-react';
import devices from "../utils/device"
import weather from "../assets/weather.png"
import rate1 from "../assets/rate1.png"
import rate2 from "../assets/rate2.png"
import { motion } from "framer-motion"
import Remote from './Remote';


function Display() {
  const [currentDate, setCurrentDate] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [selectedDevice, setSelectedDevice] = useState('');
  const city = 'ranchi'; 

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
    <div className="w-4/5 h-screen flex ">
      <div className=' w-2/3 p-4 bg-[#000000]'>
        <div className='relative bg-white'>

        </div>
        <div className='h-1/4 flex flex-col items-start justify-end p-4 m-3'>
          <div className='my-7'>
              <span className='text-4xl font-semibold'>Welcome, Admins</span>
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
            <div className='w-2/3 border-2 rounded-full bg-[#98fb98] flex p-2'>
              <div className='pl-4 flex justify-end items-center w-1/3'>
                  <img src={weather} alt="" className='h-[100px] w-[150px] rounded-full border-2'/>
              </div>
              <div className='h-[110px] w-2/3 px-4 '>
                {weatherData && (
                  <div className='h-[110px] flex gap-4'>
                    <div className='flex flex-col'>
                      <div className=' h-1/2 text-4xl'>
                        Temperature
                      </div>
                      <div className='h-1/2 flex items-end '>Wind : {weatherData.wind_speed} km/h</div>
                    </div>
                    <div className='flex items-center'>
                      <div className='text-5xl'>{weatherData.temp}∘</div>

                    </div>
                  </div>
                )}
                {!weatherData && <span>Loading weather data...</span>}
              </div>
            </div>
          </div>
        </div>

        <div className='h-1/6'>
          <span className=' text-lg pb-5'>Devices</span>
          <div className='pt-5 flex gap-1'>
            {devices.map((device, index) => (
              <motion.div onClick={()=>setSelectedDevice(device)} key={index} className="bg-red-500 w-1/2 p-4 rounded-lg border-2 h-[200px] " 
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              whileTap={{ scale: 0.9 }}>
                <div className='flex items-center '>
                  <device.ic size={40} className='border-2 p-1 h-12 w-12 rounded-full'/>
                </div>
                <h2 className="pt-4 px-1 text-3xl">{device.device}</h2>
                <img src={rate2} alt="" height={50} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className=' w-1/3 bg-[#000000ee] h-screen p-2 '>
          <Remote device={selectedDevice}/>
      </div>
    </div>
  );
}

export default Display;
