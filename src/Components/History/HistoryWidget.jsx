import React from 'react'

export default function HistoryWidget({head}) {
    return (
        <div style={{}}>
            <p style={{fontWeight: "bold", fontSize: "12px", color: "#747474", marginTop: "-4px"}}>{head}</p>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginTop: "-10px"}}>
                <p style={{fontWeight: "bold", color: "#A1AACE", fontSize: "12px"}}>22:10 15/09/2020</p>
                <div style={{backgroundColor: "#C4C4C4", borderRadius: "50%", height: "4px", width: "4px", margin: "0px 6px"}}></div>
                <p style={{fontWeight: "bold", color: "#A1AACE", fontSize: "12px"}}>Web</p>
            </div>
        </div>
    )
}
