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
        data:'右边'
    };
    render(){
        return (<div className='right'>{this.props.data}</div>)
    }
};