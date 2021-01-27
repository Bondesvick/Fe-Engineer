import React from 'react'
import styled from "styled-components"
import { FiInfo } from "react-icons/fi";

const Main = styled.div`
            background-color: #fff;
            width: 256px;
            height: 129px;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            position: relative;
            justify-content: space-around;
            padding-left: 16px;

            .num{
                position: absolute;
                top: 5px;
            }

            .txt{
                position: absolute;
                top: 60px;
                color: #9696A0;
                font-weight: bold;
            }

            .ico{
                position: absolute;
                right: 16.57px;
                color: #9696A0;
                height: 22.86px;
                width: 22.86px;
            }
`

export default function Stats({num, val}) {
    return (
        <Main>
            <h1 className="num">{num}</h1>
            <p className="txt">{val}</p>
            <FiInfo className="ico"/>
        </Main>
    )
}
