import React from 'react'
import Header from './../Components/Header'
import styled from "styled-components"
import { FcInfo } from "react-icons/fc";
import { FiInfo } from "react-icons/fi";
import Stats from "./../Components/Stats"

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
        column-gap: 5px;


        .ear{
            
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
               
                <Stats num="31454" val="Ongoing metric"/>

                <Stats num="2344" val="Past metric"/>

                <Stats num="14224" val="Missed metric"/>

                <Stats num="635" val="Failed metric"/>

                <Stats num="11334" val="Pending metric"/>
                
            </div>
            </Content>
            
        </MainBody>
    )
}
