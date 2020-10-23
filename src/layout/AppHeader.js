import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Layout, Badge, Menu, Dropdown, Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    GithubOutlined,
    BellOutlined,
    EditOutlined,
    SettingOutlined,
    LogoutOutlined
} from '@ant-design/icons';

const { Header } = Layout

export class AppHeader extends Component {
    getIcon(menuToggle, menuClick) {
        return menuToggle ? <MenuUnfoldOutlined onClick={menuClick} style={{ fontSize: '20px' }} /> : <MenuFoldOutlined onClick={menuClick} style={{ fontSize: '20px' }} />;
    }
    render() {
        let { menuClick, avatar, menuToggle, loginOut } = this.props
        const menu = (
            <Menu>
                <Menu.ItemGroup title="用户设置">
                    <Menu.Divider />
                    <Menu.Item><EditOutlined /> 个人设置</Menu.Item>
                    <Menu.Item><SettingOutlined /> 系统设置</Menu.Item>
                </Menu.ItemGroup>
                <Menu.Divider />
                <Menu.Item onClick={loginOut}><LogoutOutlined /> 退出登录</Menu.Item>
            </Menu>
        );
        return (
            <Header className="header">
                <div className="left">
                    {this.getIcon(menuToggle, menuClick)}
                </div>
                <div className="right">
                    <div className="mr15">
                        <a rel="noopener noreferrer" href="https://github.com/lxx0904" target="_blank"><GithubOutlined style={{ color: '#000' }} /></a>
                    </div>
                    <div className="mr15">
                        <Badge dot>
                            <a rel="noopener noreferrer" href="https://github.com/lxx0904" target="_blank"><BellOutlined style={{ color: '#000' }} /></a>
                        </Badge>
                    </div>
                    <div>
                        <Dropdown overlay={menu}>
                            <div className='ant-dropdown-link'><Avatar size={32} src={avatar} style={{ cursor: 'pointer' }} /></div>
                        </Dropdown>
                    </div>
                </div>
            </Header>
        )
    }
}

AppHeader.propTypes = {
    avatar: PropTypes.string,
    loginOut: PropTypes.func,
    menuToggle: PropTypes.bool,
    menuClick: PropTypes.func
};

export default AppHeader
