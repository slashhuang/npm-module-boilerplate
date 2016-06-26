import '../less/index.less';
import React,{Component,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import  'whatwg-fetch';
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
        let fetchUrl = 'https://api.github.com/users/iwfe';
        fetch(fetchUrl,{method: 'GET'})
            .then((response)=>response.json())
            .then((res)=> {
                this.setState({
                    avatar:res['avatar_url'],
                    clickHint:'你已访问'+res['login']+'的github-api信息',
                })}).catch((err)=>{alert('error');alert(JSON.stringify(err))})
    }
    componentDidMount(){
        let testStr = '欢迎使用npm-module-boilerplate构建您的npm项目\n,发布模块请别忘了修改package.json字段的信息';
        let index = 1;
        let interval = setInterval(()=> {
                this.setState({
                    test:testStr.slice(0,index)
                });
                index+=4;
                testStr==this.state.test&&clearInterval(interval)
            },50);
    }
    render(){
        let {test,clickHint,avatar} = this.state;
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
            </div>)
    }
}