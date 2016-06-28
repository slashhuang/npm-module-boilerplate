require('es6-promise');
require('fetch-ie8');
import React,{Component,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
export default class Test extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            test:props.test,
            clickHint:props.clickHint
        }
    }
    static propTypes = {
        /**
         * 参数说明
         */
        test: PropTypes.string.isRequired
    };
    static defaultProps={
        test:'components initiated',
        clickHint:'请点击执行AJAX网络请求'
    };

    handleClick(){
        if(this.state.avatar){return };
        this.setState({
            clickHint:'正连接到api.github.com'
        });
        let fetchUrl = 'http://api.github.com/users/iwfe';
        let local ='test.json';
        /**
         * 请选择任意一种网络请求方式
         */
        $.ajax({
            url:fetchUrl,
            success:(res)=>{
                this.setState({
                    avatar:res['avatar_url'],
                    clickHint:'你已用$.ajax访问'+res['login']+'的github-api信息',
                })
            },
            error:()=>{
                this.setState({clickHint:'ie8无法访问api.github.com'})
            }
        });
        fetch(local,{method: 'GET'})
            .then((response)=>response.json())
            .then((res)=> {
                this.setState({
                    _fetch:'你已用fetch访问本地，得到的数据是'+res.test
                })}).catch(()=>{this.setState({
                _fetch:'请引入es6-promise来支持fetch'
            })})
    }
    componentDidMount(){
        let testStr = '欢迎使用npm-module-boilerplate构建您的npm项目\n,发布模块请别忘了修改package.json字段的信息';
        let index = 1;
        var interval = setInterval(()=> {
                this.setState({
                    test:testStr.slice(0,index)
                });
                index+=4;
                testStr==this.state.test&&clearInterval(interval)
            },50);
    }
    render(){
        let {test,clickHint,avatar,_fetch} = this.state;
        return (
            <div>
                <div className='test'
                     onClick={()=>this.handleClick()}>
                    {test}
                </div>
                <div className='info'
                     onClick={()=>this.handleClick()}>
                    {clickHint}
                    {avatar?<img src={avatar}/>:null}
                </div>
                {_fetch?<div className='info'>{_fetch}</div>:null}
            </div>)
    }
}