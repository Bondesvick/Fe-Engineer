import React from 'react'
import styled from "styled-components"
import HistoryWidget from "./HistoryWidget";

const Main = styled.div`
    background-color: #fff;
    width: 258px;
    height: 258px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0px 9px;

    

        /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {}

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 6;
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 4;
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 4;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        grid-column-start: 3;
        grid-column-end: 4;
        grid-row-start: 2;
        grid-row-end: 4;
    }

    @media only screen and (min-width: 1440px) {
        grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 6;
    }
`

const Notification = styled.div`
     display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    margin-top: 9px;

    

`

export default function History() {
    return (
        <Main>
            <div style={{display: "flex", width: "100%", alignItems: "center"}}>
                <img src="./Images/Notify.png" alt="castle" style={{marginRight: "12px"}}/>
                <p style={{fontWeight: "bold"}}>Module History</p>
            </div>

            <Notification>
                <div style={{width: "20px", height: "100%"}}>
                    <div style={{backgroundColor: "#707070", width: "9px", height: "9px", borderRadius: "50%", marginTop: "2px"}}></div>

                    <div style={{height: "62px", borderLeft: "1px dashed #C4C4C4", marginLeft: "4px"}}></div>

                    <div style={{backgroundColor: "#707070", width: "9px", height: "9px", borderRadius: "50%"}}></div>

                    <div style={{height: "62px", borderLeft: "1px dashed #C4C4C4", marginLeft: "4px"}}></div>

                    <div style={{backgroundColor: "#707070", width: "9px", height: "9px", borderRadius: "50%"}}></div>
                </div>

                <div style={{display: "flex", justifyContent: "flex-start", flexDirection: "column"}}>

                    <HistoryWidget head="Searched “Journal Entries” on Division module"/>

                    <HistoryWidget head="Searched “Fingerprint record” on Division module"/>

                    <HistoryWidget head="Searched “Journal Entries” on Division module"/>

                </div>

                
            </Notification>

            
        </Main>
    )
}
