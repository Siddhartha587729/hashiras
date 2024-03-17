import axios from 'axios';
import { STATUS } from '../constants/actions';
const API = axios.create({baseURL: 'https://65f6f0cfb4f842e80884d8ff.mockapi.io/devices2/'});
export const fetchstatus = ()=>async(dispatch)=>{
    const res =await API.get('/device2')
    dispatch({type:STATUS,payload:res.data})
}
export const devices=(body)=>API.post('/devices');