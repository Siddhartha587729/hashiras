import {STATUS, UPDATE} from '../constants/actions';
export default(state={data:[]},action)=>{
    switch(action.type){
        case STATUS:
            return {...state,data:action.payload}
        case UPDATE :
            return {}       
        default:
            return state;
    }
}