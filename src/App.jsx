import reactLogo from './assets/react.svg'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Hero from './components/Hero'
import viteLogo from '/vite.svg'
import {status} from './actions/index'
import { useSelector, useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const [data,setData]=useState();
  useEffect(() => {
    setData(dispatch(status('8nCa1hq')));
  }, [dispatch]);

  console.log(data)
  return (
    <div className='h-screen w-full'>
      <Hero/>
    </div>
  )
}

export default App
