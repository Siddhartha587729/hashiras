import * as api from '../api/index';
export const createpost=(post)=>async(dispatch)=>{
    try {
        dispatch({type:START_LOADING});
        const {data}=await api.createpost(post);
        dispatch({type:CREATE_POST,payload:data});
        dispatch({type:END_LOADING});
    } catch (error) {
        console.log(error.message);
    }
}