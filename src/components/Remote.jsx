import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { update } from '../api';

function Remote({device}) {
  const [data, setData] = useState(device);
  const dispatch = useDispatch()

  useEffect(() => {
    setData(device);
    dispatch(update())
  }, [device,dispatch]);

  const decreaseValue = () => {
    if (data.value > 0) {
      setData(prevData => ({
        ...prevData,
        value: prevData.value - 1
      }));
    }
  };
  

  const increaseValue = () => {
    if (data.value < 5) {
      setData(prevData => ({
        ...prevData,
        value: prevData.value + 1
      }));
    }
  }
  const increaseValue_ac = () => {
    if (data.value.temp < 30) {
      setData(prevData => ({
        ...prevData,
        value: {
          ...prevData.value,
          temp: prevData.value.temp + 1
        }
      }));
    }
  };
  
  const decreaseValue_ac = () => {
    if (data.value.temp > 18) {
      setData(prevData => ({
        ...prevData,
        value: {
          ...prevData.value,
          temp: prevData.value.temp - 1
        }
      }));
    }
  };
  
  console.log(data);
  return (
    <>
    {data.device !== 'AC' ? (
  <div className='px-5 py-10 flex flex-col items-center'>
    <div>
      <span className='text-3xl'>{data.device}</span>
    </div>
    <div className='h-[250px] mt-3 overflow-hidden'>
      <img src={data.icon} alt="" />
    </div>
    <div className="mt-10 w-[200px] h-[200px] border-2 bg-blue-500 rounded-full flex items-center justify-center text-5xl">
      {data.value}
    </div>
    <div className='flex gap-36'>
      <div onClick={decreaseValue} className="my-10 w-12 h-12 border-2 bg-white rounded-full flex items-center justify-center text-black font-semibold text-3xl hover:cursor-pointer">-</div>
      <div onClick={increaseValue} className="my-10 w-12 h-12 border-2 bg-white rounded-full flex items-center justify-center text-black text-3xl font-semibold hover:cursor-pointer">+</div>
    </div>
  </div>
) : (
  <div className='px-5 py-10 flex flex-col items-center'>
    <div>
      <span className='text-3xl'>{data.device}</span>
    </div>
    <div className='h-[250px] mt-3 overflow-hidden'>
      <img src={data.icon} alt="" />
    </div>
    <div className="mt-10 w-[200px] h-[200px] border-2 bg-blue-500 rounded-full flex items-center justify-center text-5xl">
      {data.value.temp}
    </div>
    <div className='flex gap-36'>
    <div onClick={decreaseValue_ac} className="my-10 w-12 h-12 border-2 bg-white rounded-full flex items-center justify-center text-black font-semibold text-3xl hover:cursor-pointer">-</div>
      <div onClick={increaseValue_ac} className="my-10 w-12 h-12 border-2 bg-white rounded-full flex items-center justify-center text-black text-3xl font-semibold hover:cursor-pointer">+</div>
    </div>
  </div>
)}

    {/* // <div className='px-5 py-10 flex flex-col items-center'>
    //     <div>
    //         <span className='text-3xl'>{data.device}</span>
    //     </div>
    //     <div className='h-[250px] mt-3 overflow-hidden'>
    //         <img src={data.icon} alt="" />
    //     </div>
    //     <div className="mt-10 w-[200px] h-[200px] border-2 bg-blue-500 rounded-full flex items-center justify-center text-5xl">
    //     {data.device !== 'AC' ? data.value : null}
    //     </div>
    //     <div className='flex gap-36'>
    //         <div onClick={()=>decreaseValue()} className="my-10 w-12 h-12 border-2 bg-white rounded-full flex items-center justify-center text-black font-semibold text-3xl hover:cursor-pointer">-</div>
    //         <div onClick={()=>increaseValue()} className="my-10 w-12 h-12 border-2 bg-white rounded-full flex items-center justify-center text-black text-3xl font-semibold hover:cursor-pointer">+</div>
    //     </div>
    // </div> */}
    </>
  )
}

export default Remote