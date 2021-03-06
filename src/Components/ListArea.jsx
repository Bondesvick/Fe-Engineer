/* eslint-disable */
import React from 'react'
import styled from "styled-components"
import ListComponent from "./ListComponent"
import {data} from "./Data"


const Main = styled.div`
    background-color: #fff;
    width: 100%;
    min-height: 500px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 0 0 6px 6px;
    overflow-y: hidden;
    height: 550px;

    

    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 7;
        grid-row-end: 11;
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 7;
        grid-row-end: 11;
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 4;
        grid-row-end: 8;
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 4;
        grid-row-end: 8;
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        grid-column-start: 1;
        grid-column-end: 5;
        grid-row-start: 4;
        grid-row-end: 8;
    }

    @media only screen and (min-width: 1440px) {
        grid-column-start: 2;
        grid-column-end: 6;
        grid-row-start: 2;
        grid-row-end: 6;

    }

`

const Top = styled.div`
    width: 100%;
    height: 45px;
    background-color: #F3F6F9;
    display: flex;
    align-items: center;
    justify-content: stretch;

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

const HeadItemCheck = styled.div`
    /* flex: 1 1; */

    .chkbx{
        height: 15px;
        width: 15px;
        border: 5px solid #9F9F9F;
        margin-left: 20.5px;
    }

    @media only screen and (max-width: 600px) {
            flex: 2 2;
        }
    @media only screen and (min-width: 600px) {
            flex: 2 2;
        }

    @media only screen and (min-width: 768px) {
            flex: 2 2;
        }

        @media only screen and (min-width: 992px) {
            flex: 1 1;
        }
`


export default function ListArea() {
    return (
        <Main>
            <Top>
                <HeadItemCheck>
                    <input className="chkbx" type="checkbox"/>
                </HeadItemCheck>
               
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
