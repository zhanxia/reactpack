import {createStore,combineReducers} from "redux";

import {Reducer as todoReducer} from './todos';

const reducer = combineReducers({
    todoReducer
})

export default createStore(reducer)