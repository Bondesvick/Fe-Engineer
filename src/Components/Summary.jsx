import React from 'react'
import styled from "styled-components"

const Main = styled.div`
    background-color: #fff;
    width: 258px;
    height: 258px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 9px;

    

        /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 4;
        grid-row-end: 6;
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 4;
        grid-row-end: 6;
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 4;
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 4;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 2;
        grid-row-end: 4;
    }

    @media only screen and (min-width: 1440px) {
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 4;
    }
`

const Addresses = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .anAddress{
        display: flex;
         width: 100%;
         align-items: center;
         margin-bottom: -14px;

         p{
             font-size: 14px;
             line-height: 140%;
         }
    }

`

export default function Summary() {
    return (
        <Main>
            <div style={{display: "flex", width: "100%", alignItems: "center", marginBottom: "-10px"}}>
                <img src="./Images/Castle.png" alt="castle" style={{marginRight: "12px"}}/>
                <p style={{fontWeight: "bold"}}>Division Summary</p>
            </div>

            <Addresses>
                <div className="anAddress">
                    <img src="./Images/phone.png" alt="castle" style={{height: "16px", width: "16px", marginRight: "12px"}}/>
                    <p style={{}}>08012345678</p>
                </div>

                <div className="anAddress">
                    <img src="./Images/envelope.png" alt="castle" style={{height: "16px", width: "16px", marginRight: "12px"}}/>
                    <p style={{}}>asbfefr@gmail.com</p>
                </div>

                <div className="anAddress">
                    <img src="./Images/location.png" alt="castle" style={{height: "16px", width: "16px", marginRight: "12px"}}/>
                    <p style={{}}>Mojidi, Lagos</p>
                </div>

                <div className="anAddress">
                    <img src="./Images/notes-book.png" alt="castle" style={{height: "16px", width: "16px", marginRight: "12px"}}/>
                    <p style={{color: "#5771EE", textDecoration: "underline"}}>2 Journal entries</p>
                </div>

                <div className="anAddress">
                    <img src="./Images/Group.png" alt="castle" style={{height: "16px", width: "16px", marginRight: "12px"}}/>
                    <p style={{}}>24 fingerprints enrolled</p>
                </div>
            </Addresses>

            
        </Main>
    )
}
