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
        data:'中间'
    };
    render(){
        return (<div className='middle'>{this.props.data}</div>)
    }
};