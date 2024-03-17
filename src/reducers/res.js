export default(state={des:[]},action)=>{
    switch(action.type){
        case STATUS:
            return {...state,des:state.des}
    }
}