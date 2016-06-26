/**
 * Created by slashhuang on 16/6/26.
 */
import '../less/index.less';
import React,{Component,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
export default class Test extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            test:props.test,
            arrayData:props.arrayData,
            clickHint:props.clickHint
        }
    }
    static propTypes = {
        /**
         * 默认参数说明
         */
        test: PropTypes.string.isRequired,
        arrayData: PropTypes.array.isRequired
    };
    static defaultProps={
        test:'components initiated',
        clickHint:'请点击',
        arrayData:[1,2,3,4]
    };

    handleClick(){
        this.setState({
            arrayData:this.state.arrayData.map((ele,index)=>{
                return index+'changed'
            }),
            clickHint:'已点击==^_^'
        });
    }
    componentDidMount(){
        this.setState({
            test:'component Mounted'
        });
        var testStr = '欢迎使用npm-module-boilerplate构建您的npm项目\n,发布模块请别忘了修改package.json字段的信息';
        var index = 1;
        var interval = setInterval(()=> {
                this.setState({
                    test:testStr.slice(0,index)
                });
                index+=3;
                if(testStr==this.state.test){
                    clearInterval(interval);
                }
            }
            ,50);
    }
    render(){
        let {test,arrayData,clickHint} = this.state;
        return (
            <div>
                <div className='test'
                     onClick={()=>this.handleClick()}>
                    {test}
                </div>
                <div className='child-array'
                     onClick={()=>this.handleClick()}>
                    {clickHint}
                </div>
                {
                    arrayData.map((ele)=>{
                        return<div key={ele} className='child-array'>{ele}</div>})
                }
            </div>)
    }
}