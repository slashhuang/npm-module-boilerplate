# npm-module-boilerplate

> 用于快速开发react的npm模块的脚手架项目

## features[特点]
1. eslint代码规范检查
2. karma进行单元测试
3. 适配npmignore，保证仅仅发布必要的代码模块
4. 开发环境适配sourcemap
5. npm scripts命令，适配开发、测试、发布
6. 增加react-hot,实现局部刷新。

## dev tips[开发注意点]
1. react-hot在react部分的热加载是根据state来判断是否更新代码的。
> 因此当你修改defaultProps等的时候，如果想要看效果，需要刷新。
>  其余类似onClick等的事件，代码照样更新。所以整个开发体验是很不错的

> 其余的类似样式等，还是按照有更改就刷新的逻辑


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


