import * as React from 'react';
import {PropTypes} from "react";
import Style from './style.scss';

const TodoItem = ({onRemove,onToggle,completed,text}) => {
    const checkedProp = completed ? {checked:true} : {};
    return <li>
        <input type="checkbox" {...checkedProp} onClick = {onToggle}/>
        <label>{text}</label>
        <span onClick = {onRemove} title="移除">X</span>
    </li>
}
TodoItem.propTypes = {
    text:PropTypes.string.isRequired
}
export default TodoItem;