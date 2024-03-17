import * as api from '../api/index';
import { STATUS } from '../constants/actions';
export const status=(id)=>async(dispatch)=>{
    try{
        const res = await api.getDataFromAPI(id);
        dispatch({ type: STATUS, payload:res.data});
    } catch (error) {
        console.log(error.message);   
    }
}