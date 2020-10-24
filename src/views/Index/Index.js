import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd'
import { Warpper, BaseStyle } from './style'
import {
    WechatOutlined,
    QqOutlined,
    DingdingOutlined,
    WeiboOutlined,
    FullscreenOutlined
} from '@ant-design/icons';
import BarChart from './Bar'
import LineChart from './Line'
import PieChart from './Pie'
import screenfull from 'screenfull'

export class Index extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }
    fullToggle = () => {
        if (screenfull.isEnabled) {
            screenfull.request(this.myRef.current);
		}
    }
    render() {
        return (
            <Warpper className="animate__animated animate__fadeIn">
                <Row className="index-header" gutter={24}>
                    <Col span={6}>
                        <BaseStyle className="item wechat">
                            <WechatOutlined />
                            <div className="text">
                                <span>999</span>
                                <div>微信</div>
                            </div>
                        </BaseStyle>
                    </Col>
                    <Col span={6}>
                        <BaseStyle className="item qq">
                            <QqOutlined />
                            <div className="text">
                                <span>998</span>
                                <div>QQ</div>
                            </div>
                        </BaseStyle>
                    </Col>
                    <Col span={6}>
                        <BaseStyle className="item dingding">
                            <DingdingOutlined />
                            <div className="text">
                                <span>997</span>
                                <div>钉钉</div>
                            </div>
                        </BaseStyle>
                    </Col>
                    <Col span={6}>
                        <BaseStyle className="item weibo">
                            <WeiboOutlined />
                            <div className="text">
                                <span>996</span>
                                <div>微博</div>
                            </div>
                        </BaseStyle>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <BaseStyle>
                            <div className='bar-header'>
                                <div>图形全屏展示</div>
                                <FullscreenOutlined style={{ cursor: 'pointer' }} onClick={this.fullToggle} />
                            </div>
                            <Divider />
                            <div ref={this.myRef} style={{backgroundColor: '#fff', height: '300px'}}>
                                <BarChart />
                            </div>
                        </BaseStyle>
                    </Col>
                </Row>
                <Row gutter={8}>
                    <Col span={12}>
                        <BaseStyle>
                            <LineChart />
                        </BaseStyle>
                    </Col>
                    <Col span={12}>
                        <BaseStyle>
                            <PieChart />
                        </BaseStyle>
                    </Col>
                </Row>
            </Warpper>
        )
    }
}

export default Index
