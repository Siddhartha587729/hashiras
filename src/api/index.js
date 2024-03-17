import axios from 'axios';

const API = axios.create({baseURL: 'https://kodessphere-api.vercel.app'});
export async function getDataFromAPI() {
    try {
        const response = await axios.get('https://kodessphere-api.vercel.app/devices/8nCa1hq');
    } catch (error) {
        console.error('Error making GET request:', error.message);
    }
}
export const devices=(body)=>API.post('/devices');