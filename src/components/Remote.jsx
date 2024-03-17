import React, { useEffect, useState } from 'react'

function Remote({device}) {
  const [data,setData]=useState(null);
  console.log(device);
  useEffect(()=>{
    setData(device);
  },)
  const handleClick=()=>{
    data.value-=1;
  }
  const increaseValue=()=>{
    data.value+=1;
  }
  console.log(data);
  return (
    <div className='w-1/4 h-screen p-2'>
      <div className='h-1/2  bg-[#0c0908de]'>
      </div>
      <div flex>
        <div className='bg-[#0c0908de] rounded-md p-25'>
        <button onClick={()=>handleClick()}></button>
        </div>
        <div className='bg-[#0c0908de] rounded-md p-25'>
          <button onClick={()=>increaseValue()}></button>
        </div>
      </div>
    </div>
  )
}

export default Remote