/* eslint-disable */
import React from 'react'
import styled from "styled-components"
import ListComponent from "./ListComponent"
import {data} from "./Data"


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

                <HeadItem style={{flex: "1 1"}}>
                
                </HeadItem>

            </Top>
            <Content>
            {
                data.map((val) => {
                    return(
                        <ListComponent key={val.id} Name={val.name} State={val.state} Address={val.address} Issues={val.issues} Enteries={val.enteries} Risk={val.risk}/>
                    )
                })
            }
            </Content>
            
            
        </Main>
    )
}
