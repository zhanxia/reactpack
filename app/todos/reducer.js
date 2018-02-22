import {ADD_TODO,REMOVE_TODO,TOGGLE_TODO} from "./actionTypes";

export default (state = [],action) => {
    switch(action.type){
        case ADD_TODO:{
            return [
                {
                    id:action.id,
                    text:action.text,
                    completed:false
                },
                ...state
            ];
        }
        case REMOVE_TODO:{
            return state.filter((item) => {
                return item.id != action.id;
            });
        }
        case TOGGLE_TODO:{
            return state.map((item) => {
                return item.id == action.id ? {...item,completed:!item.completed} : item
            });
        }
        default:
            return state;
    }
}