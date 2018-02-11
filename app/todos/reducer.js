import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO} from "./actionTypes";

export default (state = [],action) => {
    switch(action.type){
        case ADD_TODO:{
            return state;
        }
        case REMOVE_TODO:{
            return state;
        }
        case TOGGLE_TODO:{
            return state;
        }
        default:
            return state;
    }
}