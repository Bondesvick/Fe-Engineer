/* eslint-disable */
import React from 'react'
import styled from "styled-components"
import { FiArrowRight } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";

const Main = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 0 0 6px 6px;
    overflow-y: hidden;

    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 6;


`

const Top = styled.div`
    width: 100%;
    height: 45px;
    background-color: #F3F6F9;
    display: flex;
    align-items: center;
    justify-content: stretch;

    .chkbx{
        height: 15px;
        width: 15px;
        border: 5px solid #9F9F9F;
        margin-left: 20.5px;
    }

`

const Content = styled.div`
    overflow-y: auto;
    width: 100%;
    height: 100%;
`

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


export default function ListArea() {
    return (
        <Main>
            <Top>
                <HeadItem style={{flex: "1 1"}}>
                <input className="chkbx" type="checkbox"/>
                </HeadItem>
               
                <HeadItem>
                    <p>NAME</p>
                </HeadItem>

                <HeadItem>
                    <p>LOCATION</p>
                </HeadItem>

                <HeadItem>
                    <p>STATUS</p>
                </HeadItem>

                <HeadItem>
                    <p>ENTERIES</p>
                </HeadItem>

                <HeadItem>
                    <p>RISK PROFILE</p>
                </HeadItem>

            </Top>
            <Content>
                <ListItem>
                    <HeadItem style={{flex: "1 1"}}>
                    <input className="chkbx" type="checkbox"/>
                    <img style={{marginLeft: "15px"}} src="./BlueDown.png" alt="arrow down"/>
                    </HeadItem>

                    <HeadItem>
                        <p>Courtney Henry</p>
                    </HeadItem>

                    <HeadItem>
                        <div>
                            <p>Courtney Henry</p>
                            <p>Courtney Henry</p>
                        </div>
                        
                    </HeadItem>

                    <HeadItem>
                        <div style={{color: "#8C70FF",
                                     display: "flex",
                                    alignItems: 'center',
                                    justifyContent: "center",
                                    backgroundColor: "#F6F3FF", 
                                    borderRadius: "11px", 
                                    padding: "1px 10px", 
                                    display: "inline", textAlign: "center"}}>
                            <small style={{fontWeight: "bold", alignSelf: "center"}}>No Issues</small>
                        </div>
                    </HeadItem>

                    <HeadItem>
                        <div>
                            <p>Courtney Henry</p>
                            <p>Courtney Henry</p>
                        </div>
                    </HeadItem>

                    <HeadItem>
                    <div>
                        <FiArrowDownRight/>
                        <p>Courtney Henry</p>
                    </div>
                        
                    </HeadItem>
                </ListItem>
                
            </Content>
            
            
        </Main>
    )
}
