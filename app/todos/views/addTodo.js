import * as React from 'react';
import {Component,PropTypes} from "react";
import {connect} from "react-redux";
import {addTodo} from '../actions';
import Style from './style.scss';

class AddTodo extends Component{
    constructor(props,context){
        super(props,context)
    }
    onSubmit = (ev) => {
        ev.preventDefault();
        const text = this.refs.inputText.value.trim();
        text.length > 0 && this.props.onAdd(text)
    }
    render() {
        return <div className="add-todo">
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="在此输入添加项内容" ref="inputText"/>
                <button type="submit">添加</button>
            </form>
        </div>
    }
}
AddTodo.propType = {
    onSubmit:PropTypes.func.isRequired
}
const mapDispathToProps = (dispatch) => ({
    onAdd:(text) => {
        dispatch(addTodo(text))
    }
})
export default connect(null,mapDispathToProps)(AddTodo);