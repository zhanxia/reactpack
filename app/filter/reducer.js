import {filterType} from '../constants';
import {SET_FILTER} from './actionTypes';

export default (state = filterType.ALL,action) => {
    switch(action.type){
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}