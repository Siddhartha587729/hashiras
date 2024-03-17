import reactLogo from './assets/react.svg'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Hero from './components/Hero'
import viteLogo from '/vite.svg'
import { useSelector, useDispatch } from 'react-redux';
import { fetchstatus } from './api'
function App() {
  const dispatch = useDispatch();
  const [data,setData]=useState();
  useEffect(() => {
    dispatch(fetchstatus())
  }, [dispatch])
  const data2=useSelector((state)=>state.res)
  console.log(data2)
  return (
    <div className='h-screen w-full'>
      <Hero/>
    </div>
  )
}

export default App
