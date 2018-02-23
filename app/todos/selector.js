import {createSelector} from 'reselect';
import {filterType} from '../constants';

const getTodos = (state) => state.todos;
const getFilter = (state) => state.filter;

export const selectVisibleTodos = createSelector(
    [getTodos,getFilter],
    (todos,filter) => {
        switch(filter){
            case filterType.ALL:
                return todos;
            case filterType.COMPLETE:
                return todos.filter((item) => {
                    return item.completed
                });
            case filterType.UNCOMPLETE:
                return todos.filter((item) => {
                    return !item.completed
                });
            default:
                throw new Error('unsupported filter');
        }
    }
)