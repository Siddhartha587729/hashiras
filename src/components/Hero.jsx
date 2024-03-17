import React from 'react'
import Profile from './Profile'
import Display from './Display'
import Remote from './Remote'
import StarsCanvas from './Star'
import device_info from '../utils/device'

function Hero() {
  return (
    <div className='h-10 w-full flex text-white '>
        <Profile/>
          <Display/>
    </div>
  )
}

export default Hero