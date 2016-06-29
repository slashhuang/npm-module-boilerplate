/**
 * Created by huangxiaogang on 16/6/29.
 */


import React,{Component,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';

export default class Test extends Component {
    constructor(props,context){
        super(props,context)
    }
    static defaultProps={
        data:'左边'
    };
    render(){
        return (<div className='left'>{this.props.data}</div>)
    }
};