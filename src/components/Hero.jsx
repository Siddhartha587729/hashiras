import React, { useEffect, useState } from 'react'
import Profile from './Profile'
import Display from './Display'
import Remote from './Remote'
import StarsCanvas from './Star'
import device_info from '../utils/device'
import PreLoader from './preloader'
import { Effects } from '@react-three/drei'

function Hero() {
  const [Loading,setLoading] =useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  })
  return (
    <>
    
    {Loading && <PreLoader/>}
    <div className='h-10 w-full flex text-white '>
        <Profile/>
          <Display/>
    </div>
    </>
  )
}

export default Hero