import * as React from 'react';
import {PropTypes} from "react";
import {connect} from "react-redux";
import {addTodo,toggleTodo,removeTodo} from '../actions';
import Style from './style.scss';
import TodoItem from './todoItem';
import {selectVisibleTodos} from '../selector';

const TodoList = ({todos}) => {
    return <ul className="list__todo">
        {
            todos.map((item,key) => {
                return <TodoItem text={item.text} key={key}  id={item.id}
                        completed = {item.completed}/>
            })
        }
    </ul>
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {todos:selectVisibleTodos(state)}
}

export default connect(mapStateToProps)(TodoList);