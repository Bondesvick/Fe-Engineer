import React from 'react'
import Header from './../Components/Header'
import styled from "styled-components"
import { FcInfo } from "react-icons/fc";
import { FiInfo } from "react-icons/fi";

const MainBody = styled.div`
        height: 300px;
        background-color: #EDF6FF;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        height: 100vh;
`

const Content =  styled.div`
    width: 1440px;;
    height: 840px;
    background-color: #fff;

    .flag{
        height: 53px;
        width: 100%;
        display: flex;
        align-items: center;
        padding-left: 33px;
    }

    .girdarea{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        row-gap: 0px;
        grid-template-rows: auto;
        height:90px;
        width: 100%;
        padding: 3px;
        justify-items: center;

        .grid-item{
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
        }
    }
`

export default function Home() {
    return (
        <MainBody>
            <Header/>

            <Content>

            <div className="flag">
                Hello
                <FcInfo/>
                
            </div>
                

            <div className="girdarea">
                <div className="grid-item">
                    <h1 className="num">31454</h1>
                    <p className="txt">Ongoing metric</p>
                    <FiInfo className="ico"/>
                </div>

                <div className="grid-item">
                    hello
                </div>
                <div className="grid-item">
                    hello
                </div>

                <div className="grid-item">
                    hello
                </div>
                <div className="grid-item">
                    hello
                </div>
            </div>
            </Content>
            
        </MainBody>
    )
}
