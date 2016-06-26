# npm-module-boilerplate

> 用于快速开发react的npm模块的脚手架项目

## features[特点]
1. eslint代码规范检查
2. karma进行单元测试
3. 适配npmignore，保证仅仅发布必要的代码模块
4. 开发环境适配sourcemap
5. 增加shim+sham对IE8的支持
5. npm scripts命令，适配开发、测试、发布
7. 增加react-hot,实现局部刷新

## dev tips[开发注意点]
1. UI更新: react-hot在react部分的热加载是根据state来判断是否更新UI界面的，实际上你的所有代码已经在后台更新，不需要refresh。

2. IE8: 在example/index.html已增加了对IE8的支持，如果您的组件需要兼容IE8，请自己添加shim + sham，代码发布不会打包shim+sham。

3. 网络请求: 如果已经引入jQuery库了，则用$.ajax,否则可以采用fetch来做。

4. sass或者less，可以按照喜好自己选择。由于node-sass包安装太慢，目前采用的是less，less文件未抽出。
对于使用sass的项目，需要在开发环境的webpack的module里面添加如下代码，兼容less打包。
```bash
    {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
    }
```

## 添加shim+sham下的IE8对ES6/7语法支持[以下为测试通过的]
1. 类:  class + static + super
2. 模块体系: export export default import module exports
3. 变量声明: let const 
4. 解构赋值
5. promise【在引入babel-polyfill下的情况下可用。但是会进入catch错误代码块】


## usage[使用]

- 方式1: 下载此项目至本地
- 方式2: 
    - git init
    - git remote add origin git@github.com:slashhuang/npm-module-boilerplate.git
    - git fetch
    - git pull origin master
- 修改package.json的name,url等字段为您想要在npm发布的信息  

## Command[命令]

```
	#karma测试	
	npm run test	
	#上线打包	
	npm run build	
	#demo测试	
	npm run demo	
```


