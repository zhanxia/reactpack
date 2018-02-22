import * as React from 'react';
import {Component,PropTypes} from "react";
import AddTodo from './addTodo';
import TodoList from './todoList';

class Todos extends Component{
    constructor(props,context){
        super(props)
    }
    render(){
        return <div>
            <AddTodo/>
            <TodoList/>
        </div>
    }
}

export default Todos;