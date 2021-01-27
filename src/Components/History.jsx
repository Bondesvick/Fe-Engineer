import React from 'react'
import styled from "styled-components"

const Main = styled.div`
    background-color: #fff;
    width: 258px;
    height: 258px;
    /* box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px; */
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0px 9px;

    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 6;
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

                {/* Alert Section */}
                <div style={{display: "flex", justifyContent: "flex-start", flexDirection: "column"}}>

                    <div style={{}}>
                        <p style={{fontWeight: "bold", fontSize: "12px", color: "#747474", marginTop: "-4px"}}>Searched “Journal Entries” on Division module</p>

                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "-10px"}}>
                            <p style={{fontWeight: "bold", color: "#A1AACE", fontSize: "12px"}}>22:10 15/09/2020</p>
                            <div style={{backgroundColor: "#C4C4C4", borderRadius: "50%", height: "4px", width: "4px", margin: "0px 6px"}}></div>
                            <p style={{fontWeight: "bold", color: "#A1AACE", fontSize: "12px"}}>Web</p>
                        </div>
                    </div>

                    <div style={{}}>
                        <p style={{fontWeight: "bold", fontSize: "12px", color: "#747474", marginTop: "-4px"}}>Searched “Journal Entries” on Division module</p>

                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "-10px"}}>
                            <p style={{fontWeight: "bold", color: "#A1AACE", fontSize: "12px"}}>22:10 15/09/2020</p>
                            <div style={{backgroundColor: "#C4C4C4", borderRadius: "50%", height: "4px", width: "4px", margin: "0px 6px"}}></div>
                            <p style={{fontWeight: "bold", color: "#A1AACE", fontSize: "12px"}}>Web</p>
                        </div>
                    </div>

                    <div style={{}}>
                        <p style={{fontWeight: "bold", fontSize: "12px", color: "#747474", marginTop: "-4px"}}>Searched “Journal Entries” on Division module</p>

                        <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "-10px"}}>
                            <p style={{fontWeight: "bold", color: "#A1AACE", fontSize: "12px"}}>22:10 15/09/2020</p>
                            <div style={{backgroundColor: "#C4C4C4", borderRadius: "50%", height: "4px", width: "4px", margin: "0px 6px"}}></div>
                            <p style={{fontWeight: "bold", color: "#A1AACE", fontSize: "12px"}}>Web</p>
                        </div>
                    </div>

                    
                    
                    
                </div>

                
            </Notification>

            
        </Main>
    )
}
