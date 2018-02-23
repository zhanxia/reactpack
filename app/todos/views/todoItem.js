import * as React from 'react';
import {PropTypes} from "react";
import {connect} from "react-redux";
import Style from './style.scss';
import {toggleTodo,removeTodo} from '../actions';

const TodoItem = ({onRemove,onToggle,completed,text}) => {
    const checkedProp = completed ? {checked:true} : {};
    return <li>
        <input type="checkbox" {...checkedProp} onClick = {onToggle}/>
        <label>{text}</label>
        <span onClick = {onRemove} title="移除">X</span>
    </li>
}

TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}
const mapDispathToProps = (dispatch,ownProps) => ({
    onToggle:() => {
        dispatch(toggleTodo(ownProps.id))
    },
    onRemove:() =>{
        dispatch(removeTodo(ownProps.id))
    }
})
export default connect(null,mapDispathToProps)(TodoItem);