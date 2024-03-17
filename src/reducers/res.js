import {STATUS} from '../constants/actions';
export default(state={data:[]},action)=>{
    switch(action.type){
        case STATUS:
            console.log(state.data);
            return {...state,data:action.payload}
        default:
            return state;
    }
}