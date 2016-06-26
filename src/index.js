import '../css/index.less';
import React,{Component,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
export default class Test extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            'test':props.test
        }
    }
    static propTypes = {
        /**
         * 参数说明
         */
        test: PropTypes.string.isRequired
    };
    static defaultProps={
        test:'ter1'
    };

    handleClick(){
        this.setState({
            test:'cliceeeked'
        });
    }
    componentDidMount(){

    }
    render(){
        let {test} = this.state;
        return (
            <div ref='container'>
                {/*两种写法都可以自动绑定this*/}
                <div onClick={()=>this.handleClick()} ref='test'>{test}</div>
                {[1,2,3,4].map((ele)=>{
                 return    <div key={ele}>{ele}</div>
                })}
            </div>)
    }
}