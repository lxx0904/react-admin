# React 后台管理页面

> <a href="">预览地址</a>

## 技术栈

<code>react@16.14.0 react-dom@16.14.0 react-router-dom@5.2.0 redux@4.0.5 antd@4.7.2 axios@0.20.0</code>

> <code>Create React App</code> 脚手架工具快速搭建项目结构

> <code>react-loadable@5.5.0</code> 路由懒加载

> <code>react-redux@7.2.1</code> 配合redux方便使用

> <code>bizcharts@4.0.14</code> 数据可视化

> <code>nprogress@0.2.0</code> 顶部加载条

> <code>styled-components@5.2.0</code> 局部样式

## 基本功能

* 路由懒加载
* 面包屑导航
* 登录/注销功能
* axios封装
* 简单的权限管理
* 常用UI展示

## 页面结构

~~~
|--- public # 公共文件 不参与编译
|--- src # 主程序目录
|    |--- api # axios 封装 
|    |--- assets # 资源文件
|    |--- componets # 全局组件
|    |--- layout # 页面结构组件
|    |--- routes # 路由目录
|    |--- store # redux 配置
|    |--- style # 样式文件
|    |--- utils # 工具类
|    |--- views # UI 页面
|    |--- App.js # App.js
|    |--- index.js # index.js
|- config-overrides.js # 修改默认配置文件（antd按需加载）
~~~

## 使用方法

~~~
git clone 

cd react-admin

// 安装依赖
intall

// 启动
npm start

// 打包
npm run build
~~~