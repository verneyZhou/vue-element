# vue-element

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### tip
> * router配置 多页面 嵌套路由 导航守卫 keepAlive
> * babel.config.js 配置
> * element-ui配置
> * 使用node命令生成组件
> * axios的封装  content-type类型

### vue-cli3 + element项目
#### 1.工具安装
> * 安装node
> * 安装npm
> * 安装vue-cli3
```
npm install -g @vue/cli
```
#### 2.项目搭建
> * 查看vue版本
```
vue -V
```
> * 创建项目
```
vue create vue-element
```
## 配置
1. [ ] 保存后自动重新编译？
2. [ ] postcss自适应配置
## 功能
1. [x] 通过node生成组件
```
npm install chalk --save-dev 安装chalk插件，可让控制台输出语句有颜色之分
根目录下新建scripts文件夹，新建generateComponent.js，放置生成组件代码；新增一个template.js文件，放置组件模板的代码
配置package.json脚本：npm run new:comp
```
2. [x] 全局组件自动扫描注册
3. [x] 路由自动引入
4. [x] axios封装
5. [ ] element-ui引入，自定义主题
6. [ ] vue项目国际化
7. [ ] 富文本编辑器
8. [ ] markdown编辑器
9. [ ] 拖拽
10. [ ] svg-sprite-loader实现自己的的icon组件
    ```
    npm下载svg-sprite-loader
    vue.config.js中进行配置
    新建assets/icons文件夹，引入svg文件，在入口文件index.js中统一注册
    components/global中新建全局组件cc-svg-icon
    在页面入口js中引入全局组件：import '@/components'；同时引入svg文件：import '@/assets/icons'
    ```
11. [ ]过渡效果
12. [ ]导航

## demo
1. [ ] transition做h5动画

