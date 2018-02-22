import * as React from 'react';
import {Component,PropTypes} from "react";
import {filterType} from '../../constants';
import {connect} from "react-redux";
import Style from './style.scss';
import {setFilter} from "../actions"

class Filter extends Component{
    constructor(props,context){
        super(props)
    }
    setFilter = (ev) => {
        ev.preventDefault();
        this.props.setFilter(ev.target.attributes.getNamedItem("data-type").textContent);
    }
    render(){
        return <div className="filter">
            <a href="#" data-type = {filterType.ALL} onClick = {this.setFilter}>{filterType.ALL}</a>
            <a href="#" data-type = {filterType.COMPLETE} onClick = {this.setFilter}>{filterType.COMPLETE}</a>
            <a href="#" data-type = {filterType.UNCOMPLETE} onClick = {this.setFilter}>{filterType.UNCOMPLETE}</a>
        </div>
    }
}

Filter.PropType = {
    setFilter:PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    setFilter:(type) => {
        dispatch(setFilter(type))
    }
})
export default connect(null,mapDispatchToProps)(Filter);