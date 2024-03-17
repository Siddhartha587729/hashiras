import axios from 'axios';

const API = axios.create({baseURL: 'https://kodessphere-api.vercel.app'});
export const fetchstatus = API.get('/devices/:id');
export const devices=(body)=>API.post('/devices');