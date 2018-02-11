import * as React from 'react';
import {Component,PropTypes} from "react";
import AddTodo from './addTodo';

class Todos extends Component{
    constructor(props,context){
        super(props)
    }
    render(){
        return <div>
            <AddTodo/>
        </div>
    }
}

export default Todos;