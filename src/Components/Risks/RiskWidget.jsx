import React from 'react'
import styled from "styled-components"
import { FiArrowDownRight } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";

const HeadItem = styled.div`
    flex: 2 2;
    p{
        color: #899198;
        font-size: 12px;
    }

    .closure{
        display: flex;
        align-items: center;
    }
`

export default function RiskWidget({Risk}) {
    return (

        
            Risk === "low" ? (
                <HeadItem>
                    <div className="closure">
                        <FiArrowDownRight style={{color:"#3AB65C", marginLeft: "9px",}}/>
                        <p style={{
                            marginLeft: "9px",
                            color: "#3AB65C",
                            fontSize: "14px"
                        }}>Low Risk</p>
                    </div>
                        
        </HeadItem>
            ) : Risk === "high" ? (
                <HeadItem>
                    <div className="closure">
                        <FiArrowUp style={{color:"#B63A3A", marginLeft: "9px",}}/>
                        <p style={{
                            marginLeft: "9px",
                            color: "#B63A3A",
                            fontSize: "14px"
                        }}>High Risk</p>
                    </div>
                        
        </HeadItem>
            ) : (
                <HeadItem>
                    <div className="closure">
                        <FiArrowRight style={{color:"#3C3AB6",  marginLeft: "9px",}}/>
                        <p style={{
                            marginLeft: "9px",
                            color: "#3C3AB6",
                            fontSize: "14px"
                        }}>Mid Risk</p>
                    </div>
                        
        </HeadItem>
            )
        
        
    )
}
