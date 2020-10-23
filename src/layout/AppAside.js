import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import { Menu, Layout } from 'antd';
import {
    GithubOutlined
} from '@ant-design/icons';

const { Sider } = Layout
const { SubMenu } = Menu;

export class AppAside extends Component {
    state = {
        openKeys: [],
        selectedKeys: []
    }
    renderMenuItem({ key, icon: Iicon, title }) {
        return (
            <Menu.Item key={key}>
                <Link to={key}>
                    {Iicon && <Iicon />}
                    <span>{title}</span>
                </Link>
            </Menu.Item>
        )
    }
    renderChildrenbMenu({ key, icon: Iicon, title, children }) {
        return (
            <SubMenu key={key} icon={<Iicon />} title={title}>
                {
                    children.map(child => (
                        this.renderMenuItem(child)
                    ))
                }
            </SubMenu>
        )
    }
    getOpenKeys = string => {
        let newStr = '',
            newArr = [],
            arr = string.split('/').map(i => '/' + i)
        for (let i = 1; i < arr.length - 1; i++) {
            newStr += arr[i]
            newArr.push(newStr)
        }
        return newArr
    }
    onOpenChange = openKeys => {
        if (openKeys.length === 0 || openKeys.length === 1) {
            this.setState({
                openKeys
            })
            return;
        }
        const latestOpenKey = openKeys[openKeys.length - 1]
        if (latestOpenKey.includes(openKeys[0])) {
            this.setState({
                openKeys
            })
        } else {
            this.setState({
                openKeys: [latestOpenKey]
            })
        }
    }
    componentDidMount() {
        let { pathname } = this.props.location
        this.setState({
            selectedKeys: [pathname],
            openKeys: this.getOpenKeys(pathname)
        })
    }
    componentDidUpdate(prevProps, prevState) {
        let { pathname } = this.props.location
        if (prevProps.location.pathname !== pathname) {
            this.setState({
                selectedKeys: [pathname],
                openKeys: this.getOpenKeys(pathname)
            })
        }
    }
    render() {
        const { openKeys, selectedKeys } = this.state
        const { menu, menuToggle } = this.props;
        return (
            <Sider className='aside' collapsed={menuToggle}>
                <div className='logo'>
                    <GithubOutlined style={{ color: '#fff', fontSize: '38px' }} />
                </div>
                <Menu
                    mode="inline"
                    theme="dark"
                    selectedKeys={selectedKeys}
                    openKeys={openKeys}
                    onClick={({ key }) => { this.setState({selectedKeys: [key]}) }}
                    onOpenChange={this.onOpenChange}
                >
                    {
                        menu.map(item => {
                            return item.children && item.children.length > 0 ? this.renderChildrenbMenu(item) : this.renderMenuItem(item)
                        })
                    }
                </Menu>
            </Sider>
        )
    }
}

AppAside.propTypes = {
    menu: PropTypes.array,
    menuToggle: PropTypes.bool
};

export default withRouter(AppAside)
