import React, { Component } from 'react'
import { Form, Input, Button, Divider, notification, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import API from '../../api'

import '../../style/login.scss'

const FormItem = Form.Item;

export class index extends Component {
    state = {
        loading: false
    }
     onFinish = (values) => {
        this.setState({
            loading: true
        });
        // try {
        //     const result = await API.post("/login.do", {
        //         username: 'admin',
        //         password: ""
        //     })
        //     console.log(result)
        // } catch (error) {
        //     console.log(error)
        // }
        // .then(res => {
        //     console.log(res)
        // }).catch(err => {
        //     console.log(err)
        // })
        this.timer = setTimeout(() => {
            localStorage.setItem('user', JSON.stringify(values))
            let menu = [];
            switch (values.username) {
                case 'admin':
                    menu = [{ id: 1, pId: 0, name: "首页", path: "/index" },
                    { id: 2, pId: 0, name: "通用", path: "/public" },
                    { id: 3, pId: 2, name: "按钮", path: "/public/button" },
                    { id: 4, pId: 2, name: "图标", path: "/public/icon" },
                    { id: 5, pId: 0, name: "导航", path: "/nav" },
                    { id: 6, pId: 5, name: "下拉菜单", path: "/nav/dropdown" },
                    { id: 7, pId: 5, name: "导航菜单", path: "/nav/menu" },
                    { id: 8, pId: 5, name: "步骤条", path: "/nav/steps" }];
                    localStorage.setItem('menu', JSON.stringify(menu))
                    break
                default:
                    menu = [{ id: 1, pId: 0, name: "首页", path: "/index" },
                    { id: 2, pId: 0, name: "通用", path: "/public" },
                    { id: 3, pId: 2, name: "按钮", path: "/public/button" },
                    { id: 4, pId: 2, name: "图标", path: "/public/icon" }];
                    localStorage.setItem('menu', JSON.stringify(menu))
            }
            message.success('登录成功!')
            this.props.history.replace('/')
        }, 2000)
    };
    componentDidMount() {
        notification.open({
            message: '欢迎使用后台管理平台',
            description: '账号 admin(管理员) 其他(游客) 密码随意',
            duration: 0
        })
    }
    componentWillUnmount() {
        notification.destroy()
        if (this.timer) clearTimeout(this.timer);
    }
    render() {
        return (
            <div className="login">
                <div className="wrap">
                    <div className="model">
                        <h3>后台管理系统</h3>
                        <Divider />
                        <Form
                            name="normal_login"
                            onFinish={this.onFinish}
                        >
                            <FormItem name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                                <Input prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            </FormItem>
                            <FormItem name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                                <Input
                                    prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />
                            </FormItem>
                            <FormItem>
                                <Button type="primary" htmlType="submit" block loading={this.state.loading}>登录</Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default index
