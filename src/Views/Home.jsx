import React from 'react'
import Header from './../Components/Header'
import styled from "styled-components"
import { FcInfo } from "react-icons/fc";
import Stats from "./../Components/Stats"
import Summary from "./../Components/Summary"
import ListArea from "./../Components/ListArea"
import History from "./../Components/History"

const MainBody = styled.div`
        background-color: #EDF6FF;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        height: 100%;
`

const Content =  styled.div`
    width: 1440px;;
    min-height: 800px;
    background-color: #fff;

    .flag{
        height: 45px;
        width: 100%;
        display: flex;
        align-items: center;
        padding-left: 33px;
    }

    .gridarea{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-template-rows: auto;
        height: 90px;
        width: 100%;
        grid-gap: 25px;
        padding: 0 15px 15px 15px;
        padding-bottom: 15px;

        
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
                    

                <div className="gridarea">
                
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
