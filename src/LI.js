/**
 * Created by huangxiaogang on 16/6/29.
 */

import React,{Component,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';

export default class Test extends Component {
    constructor(props,context){
        super(props,context)
    }
    render(){
        return (<li>{this.props.children}</li>)
    }
};