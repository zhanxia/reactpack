import * as React from 'react';
import {PropTypes} from "react";
import {connect} from "react-redux";
import {addTodo,toggleTodo,removeTodo} from '../actions';
import Style from './style.scss';
import {filterType} from '../../constants';
import TodoItem from './todoItem';

const TodoList = ({onRemoveTodo,onToggleTodo,todos}) => {
    return <ul className="list__todo">
        {
            todos.map((item,key) => {
                return <TodoItem text={item.text} key={key} 
                        completed = {item.completed}
                        onToggle = {() => onToggleTodo(item.id)}
                        onRemove = {() => onRemoveTodo(item.id)}/>
            })
        }
    </ul>
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onToggleTodo:PropTypes.func.isRequired,
    onRemoveTodo:PropTypes.func.isRequired
};

const selectVisibleTodos = (todos,filter) => {
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
const mapStateToProps = (state) => ({
    todos:selectVisibleTodos(state.todos,state.filter)
})

const mapDispathToProps = (dispatch) => ({
    onToggleTodo:(id) => {
        dispatch(toggleTodo(id))
    },
    onRemoveTodo:(id) =>{
        dispatch(removeTodo(id))
    }
})

export default connect(mapStateToProps,mapDispathToProps)(TodoList);