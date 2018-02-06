import {createStore,combineReducers} from "redux";
import {reducer as FilterReducer} from './filter';

const combineReducer = combineReducers({
    FilterReducer
})

export default  createStore(combineReducer,{});