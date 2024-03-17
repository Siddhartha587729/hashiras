import axios from 'axios';

const API = axios.create({baseURL: 'https://kodessphere-api.vercel.app'});
export const getDataFromAPI = async () => {
    try {
        const response = await API.get('/devices/8nCa1hq');
        console.log(response.data);
        return response.data;
        // console.log('Response from GET request:', response.data);
    } catch (error) {
        console.error('Error making GET request:', error.message);
        throw error; // Rethrow the error for handling in the caller
    }
}
export const devices=(body)=>API.post('/devices');