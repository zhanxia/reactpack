import {ADDTODO,REMOVETODO,TOGGLETODO} from "./actionTypes";

export default (state = [],action) => {
    switch(action.type){
        case ADDTODO:{
            return state;
        }
        case REMOVETODO:{
            return state;
        }
        case TOGGLETODO:{
            return state;
        }
        default:
            return state;
    }
}