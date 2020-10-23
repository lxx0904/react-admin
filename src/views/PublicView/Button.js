import React, { Component } from 'react'
import { Row, Col, Divider, Button, Tooltip, Radio } from 'antd'
import CustomBreadcrumb from '../../componets/CustomBreadcrumb'
import { BaseStyle } from './style'
import {
    SearchOutlined,
    PoweroffOutlined,
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';

export class ButtonView extends Component {
    state = {
        loadings: [],
    };

    enterLoading = index => {
        this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;

            return {
                loadings: newLoadings,
            };
        });
        setTimeout(() => {
            this.setState(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;

                return {
                    loadings: newLoadings,
                };
            });
        }, 6000);
    };

    render() {
        const { loadings } = this.state;
        return (
            <div className="animate__animated animate__fadeIn">
                <CustomBreadcrumb arr={["通用", "按钮"]} />
                <BaseStyle>
                    <h3>何时使用</h3>
                    <Divider />
                    <p>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>
                </BaseStyle>
                <Row gutter={8}>
                    <Col span={12}>
                        <BaseStyle>
                            <Button type="primary">Primary</Button>
                            <Button>Default</Button>
                            <Button type="dashed">Dashed</Button>
                            <Button type="primary" danger>danger</Button>
                            <Button type="link">Link Button</Button>
                        </BaseStyle>
                        <BaseStyle>
                            <Button type="primary" loading>
                                Loading
                            </Button>
                            <Button type="primary" size="small" icon={<PoweroffOutlined />} loading>
                                Loading
                            </Button>
                            <Button type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                                Click me!
                            </Button>
                            <Button
                                type="primary"
                                icon={<PoweroffOutlined />}
                                loading={loadings[1]}
                                onClick={() => this.enterLoading(1)}
                            >
                                Click me!
                            </Button>
                            <Button
                                type="primary"
                                icon={<PoweroffOutlined />}
                                loading
                            />
                            <Button
                                type="primary"
                                shape="circle"
                                icon={<PoweroffOutlined />}
                                loading
                            />
                            <Button
                                type="primary"
                                danger
                                shape="round"
                                icon={<PoweroffOutlined />}
                                loading
                            />
                        </BaseStyle>
                        <BaseStyle>
                            <Radio.Group>
                                <Radio.Button value="large">Large</Radio.Button>
                                <Radio.Button value="default">Default</Radio.Button>
                                <Radio.Button value="small">Small</Radio.Button>
                            </Radio.Group>
                            <Radio.Group disabled>
                                <Radio.Button value="large">L</Radio.Button>
                                <Radio.Button value="default">M</Radio.Button>
                                <Radio.Button value="small">R</Radio.Button>
                            </Radio.Group>
                            <Radio.Group>
                                <Radio.Button value="large"><LeftOutlined /> Go back</Radio.Button>
                                <Radio.Button value="small">Go forward <RightOutlined /></Radio.Button>
                            </Radio.Group>
                            <Radio.Group size="small">
                                <Radio.Button value="large"><LeftOutlined /></Radio.Button>
                                <Radio.Button value="small"><RightOutlined /></Radio.Button>
                            </Radio.Group>
                        </BaseStyle>
                    </Col>
                    <Col span={12}>
                        <BaseStyle>
                            <Tooltip title="search">
                                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                            </Tooltip>
                            <Button type="primary" shape="circle">A</Button>
                            <Button type="primary" icon={<SearchOutlined />}>Search</Button>
                            <Tooltip title="search">
                                <Button shape="circle" icon={<SearchOutlined />} />
                            </Tooltip>
                            <Button icon={<SearchOutlined />}>Search</Button>
                            <Tooltip title="search">
                                <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                            </Tooltip>
                            <Button type="dashed" icon={<SearchOutlined />}>
                                Search
                            </Button>
                        </BaseStyle>
                        <BaseStyle>
                            <Button type="primary">Primary</Button>
                            <Button type="primary" disabled>
                                Primary(disabled)
                            </Button>
                            <Button>Default</Button>
                            <Button disabled>Default(disabled)</Button>
                            <Button type="dashed">Dashed</Button>
                            <Button type="dashed" disabled>
                                Dashed(disabled)
                            </Button>
                        </BaseStyle>
                        <BaseStyle>
                            <Button type="primary" block>
                                Primary
                            </Button>
                            <Button block>Default</Button>
                            <Button type="dashed" block>
                                Dashed
                            </Button>
                            <Button type="link" block>
                                Link
                            </Button>
                        </BaseStyle>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ButtonView
