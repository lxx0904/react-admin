import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout, Modal, message, BackTop } from 'antd';
import '../style/layout.scss'
import routes from '../routes/index'

import AppAside from './AppAside.js'
import AppHeader from './AppHeader.js'
import Utils from '../utils'
import { connect } from 'react-redux'
import { menuToggleAction } from '../store/actionCreators'

const { Footer, Content } = Layout;

export class DefaultLayout extends Component {
    state = {
        menu: [],
        routes: [],
        // menuToggle: false
    }
    isLogin() {
        if (localStorage.getItem('user')) {
            let menu = JSON.parse(localStorage.getItem('menu'));
            this.routesHash = {};
            this.getRoutesHash(routes);
            this.setState({
                menu: this.getMenu(menu),
                routes: this.getRoutes(menu)
            })
        }
    }
    getRoutesHash(array) {
        array.forEach(item => {
            this.routesHash[item.key] = item;
            if (Array.isArray(item.children)) {
                this.getRoutesHash(item.children);
            }
        });
    }
    getMenu(menu) {
        let newMenu = Utils.transformToTree(menu);
        let hasMenu = menu => {
            return menu.map(item => {
                return {
                    title: item.name,
                    key: item.path,
                    icon: this.routesHash[item.path].icon,
                    children: item.children && item.children.length && hasMenu(item.children)
                }
            })
        }
        return hasMenu(newMenu);
    }
    getRoutes(menu) {
        let newMenu = Utils.transformToTree(menu);
        let r = [];
        let hasRoutes = menu => {
            menu.forEach(item => {
                if (item.children && item.children.length) {
                    hasRoutes(item.children);
                } else {
                    r.push({
                        key: item.path,
                        component: this.routesHash[item.path].component
                    })
                }
            });
        }
        hasRoutes(newMenu);
        return r;
    }
    loginOut = () => {
        const { confirm } = Modal;
        confirm({
            title: '您确定要退出登录吗?',
            cancelText: '取消',
            okText: '确定',
            onOk: () => {
                localStorage.clear()
                this.props.history.push('/login')
                message.success('登出成功!')
            }
        });
    }
    // menuClick = () => {
    //     this.setState({
    //         menuToggle: !this.state.menuToggle
    //     })
    // }
    UNSAFE_componentWillMount() {
        this.isLogin()
    }
    render() {
        if (!localStorage.getItem('user')) {
            return <Redirect to="/login" />
        } else {
            // menuToggle
            const { menu, routes } = this.state;
            const { menuToggle, menuClick } = this.props;
            return (
                <Layout className="app" style={{ minHeight: '100%' }}>
                    <BackTop />
                    <AppAside menuToggle={menuToggle} menu={menu} />
                    <Layout style={{ marginLeft: menuToggle ? '80px' : '200px' }}>
                        <AppHeader avatar="http://img1.szhk.com/Image/2020/10/13/1602576197132.jpg" loginOut={this.loginOut} menuToggle={menuToggle} menuClick={() => { menuClick(123456) }} />
                        <Content className="content">
                            <Switch>
                                {
                                    routes.map(item => {
                                        return <Route key={item.key} path={item.key} component={item.component} />
                                    })
                                }
                                <Redirect to="/404" />
                            </Switch>
                        </Content>
                        <Footer className="footer">React Admin ©2020 Created By lanxx</Footer>
                    </Layout>
                </Layout>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        menuToggle: state.menuToggle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        menuClick: (...args) => dispatch(menuToggleAction(...args))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout)
