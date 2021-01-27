import React from 'react'
import styled from "styled-components"
import RiskWidget from "./Risks/RiskWidget"

const ListItem = styled.div`
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #DCE1E7;
    display: flex;
    align-items: center;

    .chkbx{
        height: 15px;
        width: 15px;
        border: 5px solid #9F9F9F;
        margin-left: 20.5px;
    }
`

const HeadItem = styled.div`
    flex: 2 2;
    p{
        color: #899198;
        font-size: 12px;
    }
`


export default function ListComponent({Name, State, Address, Issues, Enteries, Risk}) {
    return (
        <ListItem>
                    <HeadItem style={{flex: "1 1"}}>
                    <input className="chkbx" type="checkbox"/>
                    <img style={{marginLeft: "15px"}} src="./Images/BlueDown.png" alt="arrow down"/>
                    </HeadItem>

                    <HeadItem>
                        <p style={{
                                color:"#000",
                                fontWeight: "bold"
                            }}>{Name}</p>
                    </HeadItem>

                    <HeadItem>
                        <div style={{
                            position: "relative",
                        }}>
                            <p style={{
                                color:"#000",
                                fontWeight: "bold",
                                position: "absolute",
                                top: "-30px"
                            }}>{State}</p>
                            <p style={{
                                position: "absolute",
                                bottom: "-30px"
                            }}>{Address}</p>
                        </div>
                        
                    </HeadItem>

                    <HeadItem>
                    {
                        Issues > 0 ? (
                            <div style={{color: "#F4B400",
                                    alignItems: 'center',
                                    justifyContent: "center",
                                    backgroundColor: "#FFF6DE", 
                                    borderRadius: "11px", 
                                    padding: "2px 12px", 
                                    display: "inline", 
                                    textAlign: "center",
                                    marginLeft: "5px"}}>
                            <small style={{fontWeight: "bold", alignSelf: "center"}}>{Issues} Issues found</small>
                        </div>
                        ) : (
                            <div style={{color: "#8C70FF",
                                    alignItems: 'center',
                                    justifyContent: "center",
                                    backgroundColor: "#F6F3FF", 
                                    borderRadius: "11px", 
                                    padding: "2px 12px", 
                                    display: "inline", 
                                    textAlign: "center",
                                    marginLeft: "5px"}}>
                            <small style={{fontWeight: "bold", alignSelf: "center"}}>No Issues</small>
                        </div>
                        )
                    }
                        
                    </HeadItem>

                    <HeadItem>
                        <div style={{
                            position: "relative",
                            marginLeft: "10px"
                        }}>

                            <div style={{
                                position: "absolute",
                                top: "-30px",
                                display: "flex",
                                alignItems: "center"
                            }}>

                                <div style={{height:"7px",
                                            width:"7px",
                                            backgroundColor:"#000",
                                            borderRadius:"50%",
                                            // display: "inline",
                                            marginRight: "4px"}}>
                                </div>

                                <p style={{
                                color:"#000",
                                fontWeight: "bold",
                                }}>
                                    {Enteries} Unique Entries
                                </p>
                            </div>

                           
                            <p style={{
                                position: "absolute",
                                bottom: "-30px"
                            }}>Homogenous</p>
                        </div>
                    </HeadItem>

                    <RiskWidget Risk={Risk}/>

                    <HeadItem style={{flex: "1 1"}}>
                        <img src="./Images/menu.png" alt="arrow down"/>
                    </HeadItem>
                </ListItem>
    )
}
