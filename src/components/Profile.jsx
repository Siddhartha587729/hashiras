import React, { useState } from 'react'
import { WashingMachine,Home, MonitorSmartphone } from 'lucide-react';
import home from "../assets/home.jpg"
import hashira from "../assets/hashira.jpg"
import { motion } from "framer-motion"

function Profile() {
  return (
    <div className=' w-1/5 bg-[#000000ee] h-screen p-4 py-10 flex flex-col gap-5'>
      <div className='flex items-center gap-4 '>
        <WashingMachine color="white" size={40}/>
        <span className='text-lg font-semibold'>
          Smart Home Automation
        </span>
      </div>
      <div className='h-[200px] px-5 flex justify-center pb-10' > 
        <img src={home} alt="" className='w-full rounded-xl h-[150px]'
        />
        
      </div>
      <div className='flex flex-col gap-4 '>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          className='rounded-lg p-2 flex justify-center gap-2 '
        ><Home/>Home
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          className=' rounded-lg p-2 flex justify-center gap-2 '
        ><MonitorSmartphone />Devices
        </motion.button>
      </div>
      <div className='flex justify-center'>
        <div className='w-[200px] border-y-2 h-0.2 border-[#100c08]'></div>
      </div>
      <div className='flex flex-col gap-2'>
        <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            className=' rounded-lg p-2 flex justify-center gap-2'
          ><MonitorSmartphone />Fan
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.0 }}
            className='rounded-lg p-2 flex justify-center gap-2 '
          ><MonitorSmartphone />Bulb
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            className=' rounded-lg p-2 flex justify-center gap-2 '
          ><MonitorSmartphone />LED
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 0.9 }}
            className='rounded-lg p-2 flex justify-center gap-2 '
          ><MonitorSmartphone />AC
          </motion.button>
        
      </div>
      <div className='flex h-1/6 items-end justify-center'>Developed by - <span className='text-green-500'> &nbsp;Hashiras</span>
      </div>
      
    </div>
  )
}

export default Profile