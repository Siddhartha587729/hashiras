import React from 'react'
import Profile from './Profile'
import Display from './Display'
import Remote from './Remote'

function Hero() {
  return (
    <div className='h-10 w-full flex text-white '>
        <Profile/>
        <Display/>
        <Remote/>
    </div>
  )
}

export default Hero