import React from 'react'
import Header from './../Components/Header'
import styled from "styled-components"
import Stats from "./../Components/Stats"
import Summary from "./../Components/Summary"
import ListArea from "./../Components/ListArea"
import History from "../Components/History/History"

const MainBody = styled.div`
        background-color: #EDF6FF;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        min-height: 100vh;
`

const Content =  styled.div`
    
    
    background-color: #fff;

        /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        max-width: 600px;
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        min-height: 1550px;
        max-width: 768px;
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        min-height: 1250px;
        max-width: 992px;
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        min-height: 1100px;
        max-width: 992px;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        max-width: 1200px;
        min-height: 1100px;
    }

    @media only screen and (min-width: 1440px) {
       
        max-width: 1440px;
        min-height: 1200px;

    }

    .flag{
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        padding-left: 33px;
        color: #778699;
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

                /* Extra small devices (phones, 600px and down) */
        @media only screen and (max-width: 600px) {}

        /* Small devices (portrait tablets and large phones, 600px and up) */
        @media only screen and (min-width: 600px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(9, 1fr);
            grid-template-rows: auto;
        }

        /* Medium devices (landscape tablets, 768px and up) */
        @media only screen and (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(7, 1fr);
            grid-template-rows: auto;
        }

        /* Large devices (laptops/desktops, 992px and up) */
        @media only screen and (min-width: 992px) {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(7, 1fr);
            grid-template-rows: auto;
        }

        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media only screen and (min-width: 1200px) {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(7, 1fr);
            grid-template-rows: auto;

        }

        @media only screen and (min-width: 1440px) {
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: repeat(5, 1fr);
            grid-template-rows: auto;

        }
        
        
    }
`

export default function Home() {
    return (
        <MainBody>
            

            <Content>

                <Header/>

                <div className="flag">
                    <p>Divisions</p>
                    <img src="./Images/Path.png" alt="flag-ico" style={{margin: "4px 6px 0px 6px"}}/>
                    <p>Module</p>
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
