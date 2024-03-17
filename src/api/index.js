import axios from 'axios';
import { STATUS, UPDATE } from '../constants/actions';
const API = axios.create({baseURL: 'https://kodessphere-api.vercel.app'});
export const fetchstatus = ()=>async(dispatch)=>{
    const res =await API.get('/devices/:id')
    dispatch({type:STATUS,payload:res.data})
}

export const update=(data)=>async(dispatch)=>{
    const res = await APT.post('/devices',data)
    dispatch({type:UPDATE,payload:res.data})
}