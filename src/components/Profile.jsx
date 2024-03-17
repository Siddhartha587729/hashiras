import React from 'react'
import { WashingMachine,Home, MonitorSmartphone } from 'lucide-react';
import home from "../assets/home.jpg"
import { motion } from "framer-motion"

function Profile() {
  return (
    <div className=' w-1/4 bg-[#0c0908de] h-screen p-4 py-10 flex flex-col gap-5'>
      <WashingMachine color="white" size={48}/>
      <div > 
        <img src={home} alt="" className='rounded-xl'/>
      </div>
      <div className='flex flex-col gap-4'>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          className='border-slate-900 border-2 rounded-lg p-2 flex justify-center gap-2'
        ><Home/>Home
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          className='border-slate-900 border-2 rounded-lg p-2 flex justify-center gap-2'
        ><MonitorSmartphone />Device
        </motion.button>
      </div>
      <div className='border-y-2 h-1 border-slate-950'></div>
      <div>
      <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          className='border-slate-900 border-2 rounded-lg p-2 flex justify-center gap-2'
        ><MonitorSmartphone />Device
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          className='border-slate-900 border-2 rounded-lg p-2 flex justify-center gap-2'
        ><MonitorSmartphone />Device
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          className='border-slate-900 border-2 rounded-lg p-2 flex justify-center gap-2'
        ><MonitorSmartphone />Device
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{ scale: 0.9 }}
          className='border-slate-900 border-2 rounded-lg p-2 flex justify-center gap-2'
        ><MonitorSmartphone />Device
        </motion.button>
        
      </div>
      <div>Developed by</div>
      
    </div>
  )
}

export default Profile