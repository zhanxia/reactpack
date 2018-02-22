import {createStore,combineReducers} from "redux";

import {Reducer as todoReducer} from './todos';
import {Reducer as filterReducer} from './filter';

const reducer = combineReducers({
    todos:todoReducer,
    filter:filterReducer
})

export default createStore(reducer)