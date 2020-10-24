import styled from 'styled-components'

export const Warpper = styled.div`
    padding: 15px 0;
    .index-header {
        color: #fff;
        .item {
            display: flex;
        }
    }
`

export const BaseStyle = styled.div`
    background-color: #ffffff;
    margin-bottom: 10px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 13px 0 hsla(0,0%,89.4%,.6);
    &.wechat {
        background-color: #70ca63;
    }
    &.qq {
        background-color: #967adc;
    }
    &.dingding {
        background-color: #5d5dfd;
    }
    &.weibo {
        background-color: #fb452d;
    }
    .anticon {
        font-size: 60px;
        padding-right: 10px;
        color: rgba(251,251,244,.7);
    }
    .text {
        font-size: 16px;
        span {
            font-weight: 600;
            font-size: 20px;
        }
    }
    .bar-header {
        display: flex;
        justify-content: space-between;
        .anticon {
            color: #000;
            font-size: 20px;
        }
    }
`