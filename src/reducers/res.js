import {STATUS} from '../constants/actions'
export default(state={des:[]},action)=>{
    switch(action.type){
        case STATUS:
            return {...state,des:state.des}
        default:
            return state;
    }
}