import React from 'react'
import { WashingMachine } from 'lucide-react';
import home from "../assets/home.jpg"

function Profile() {
  return (
    <div className=' w-1/4 bg-[#0c0908de] h-screen p-4 py-10 flex flex-col gap-5'>
      <WashingMachine color="white" size={48}/>
      <div > 
        <img src={home} alt="" className='rounded-xl'/>
      </div>
      <div>
        <li className='list-none '>
          <ul>Home</ul>
          <ul>Devices</ul>
        </li>
      </div>
      <div>
        <li className='list-none'>
            <ul>Fan</ul>
            <ul>Bulb</ul>
            <ul>LED</ul>
            <ul>AC</ul>
          </li>
      </div>
      <div>Developed by</div>
      
    </div>
  )
}

export default Profile