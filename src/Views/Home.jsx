import React from 'react'
import Header from './../Components/Header'
import styled from "styled-components"
import { FcInfo } from "react-icons/fc";
import Stats from "./../Components/Stats"
import Summary from "./../Components/Summary"
import ListArea from "./../Components/ListArea"
import History from "./../Components/History"

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
    min-height: 840px;
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
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-template-rows: auto;
        height: 90px;
        width: 100%;
        ${'' /* grid-column-gap: 5px; */}
        ${'' /* align-items: center; */}
        ${'' /* grid-row-gap: 5px; */}
        grid-gap: 25px;
        padding: 15px;

        .ear{
            background-color: #fff;
            width: 258px;
            height: 258px;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            position: relative;
            justify-content: space-around;
            padding-left: 16px;
        }

        .ear2{
            background-color: #fff;
            width: 100%;
            height: 100%;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border-radius: 0 0 6px 6px;
            display: flex;
            flex-direction: column;
            position: relative;
            justify-content: space-around;
        
        }

        .ear3{
            background-color: #fff;
            width: 258px;
            height: 258px;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            position: relative;
            justify-content: space-around;
            padding-left: 16px;
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
               
                <Stats style={{gridColumnStart: "1", gridColumnEnd: "2", gridRowStart: "1", gridRowEnd: "2"}} num="31454" val="Ongoing metric"/>

                <Stats style={{gridColumnStart: "2", gridColumnEnd: "3", gridRowStart: "1", gridRowEnd: "2"}} num="2344" val="Past metric"/>

                <Stats style={{gridColumnStart: "3", gridColumnEnd: "4", gridRowStart: "1", gridRowEnd: "2"}} num="14224" val="Missed metric"/>

                <Stats style={{gridColumnStart: "4", gridColumnEnd: "5", gridRowStart: "1", gridRowEnd: "2"}} num="635" val="Failed metric"/>

                <Stats style={{gridColumnStart: "5", gridColumnEnd: "6", gridRowStart: "1", gridRowEnd: "2"}} num="11334" val="Pending metric"/>

                <Summary />

                <ListArea/>

                <History/>
                
            </div>
            </Content>
            
        </MainBody>
    )
}
