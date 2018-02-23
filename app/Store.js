import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import perf from 'react-addons-perf';

import {Reducer as todoReducer} from './todos';
import {Reducer as filterReducer} from './filter';

const win = window;
win.Perf = perf;

const reducer = combineReducers({
    todos:todoReducer,
    filter:filterReducer
})

const middleware = [];
if(process.env.NODE_ENV !== 'production'){
    middleware.push(require('redux-immutable-state-invariant').default());
}

const storeEnhancers = compose(
    applyMiddleware(...middleware),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f
)

export default createStore(reducer,{},storeEnhancers)