require('../public.less');
import{
    Welcome
} from '../../src/index.js';
import React,{Component,PropTypes} from 'react';
import {findDOMNode,render} from 'react-dom';

export default class Test extends Component {
    constructor(props,context){
        super(props,context)
    }
    static defaultProps={
        data:'左边'
    };

    render(){return <Welcome/>}
};

render(<Test/>,document.getElementById('root'));
