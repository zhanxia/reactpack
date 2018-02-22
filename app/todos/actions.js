import {ADD_TODO,TOGGLE_TODO,REMOVE_TODO} from './actionTypes';

const guid = () => {
    const S4 = () => {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

export const addTodo = (text) => ({
    type:ADD_TODO,
    text:text,
    id:guid()
})

export const toggleTodo = (id) => ({
    type:TOGGLE_TODO,
    id:id
})

export const removeTodo = (id) =>({
    type:REMOVE_TODO,
    id:id
})