require('../public.less');
import{
    Welcome,
    Li,
    Right,
    Left,
    Middle
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
    renderLeft(){
        return <Li><Left/></Li>
    }
    renderMiddle(){
        return <Li><Left/><Middle/></Li>
    }
    renderRight(){
        return <Li><Left/><Middle/><Right/></Li>
    }

    render(){
        return (
            <div>
                <Welcome/>
                <ul className='ul-container'>
            {
                this.renderLeft()
            }
            {
                this.renderMiddle()
            }
            {
                this.renderRight()
            }
        </ul>
                </div>
                )
    }
};

render(<Test/>,document.getElementById('root'));
