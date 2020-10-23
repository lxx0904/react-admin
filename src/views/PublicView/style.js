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
    h3 {
        font-size: 20px;
    }
    .ant-btn, .ant-radio-group {
        margin-right: 8px;
        margin-bottom: 12px;
    }
    .icons-list {
        margin: 0;
        padding: 0;
        &::after{
            content: "";
            display: block;
            clear: both;
        }
        li {
            position: relative;
            float: left;
            width: 10%;
            height: 60px;
            line-height: 60px;
            color: rgb(85, 85, 85);
            text-align: center;
            background-color: rgb(255, 255, 255);
            font-size: 28px;
            cursor: pointer;
            overflow: hidden;
            list-style: none;
            border-radius: 4px;
            &:hover {
                background-color: rgb(204, 204, 204);
            }
        }
    }
`