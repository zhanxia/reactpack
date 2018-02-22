import {SET_FILTER} from './actionTypes';

export const setFilter = (type) => ({
    type:SET_FILTER,
    filter:type
})