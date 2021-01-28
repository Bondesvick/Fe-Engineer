import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
import { FaSistrix } from "react-icons/fa";

const Main = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    border-bottom: #DCE1E7 solid 1px;
    
    display: flex;
    align-items: center;
    padding-left: 26px;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
        min-height: 52px;
    }

    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
        /* min-width: 600px; */
        flex-direction: column;
        min-height: 52px;
    }

    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
        /* min-width: 768x; */
        flex-direction: column;
        min-height: 52px;
    }

    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
        height: 52px;
        flex-direction: row;
        /* min-width: 992px; */
    }

    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
        /* min-width: 1200px; */
        height: 52px;
        flex-direction: row;
    }

    @media only screen and (min-width: 1440px) {
        /* min-width: 1440px; */
        height: 52px;
        flex-direction: row;
    }

    .title{
        font-size: 14px;
        line-height: 22px;
        min-width: 120px;
    }
`

const LinkArea = styled.div`
    margin-left: 10px;
    height: 100%;
    display: flex;
    align-items: center;

    .aLink{
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 14px 0 14px;
        text-decoration: none;
        margin-left: 8px;
        position: relative;

        .ico{
            color: #fff;
        }

        .txt{
            color: #778699;
            padding-left: 9.2px;
            text-decoration: none;
        }

        .bottom{
            position: absolute;
            height: 5px;
            width: 100%;
            background-color: #fff;
            bottom:0px;
            left: 0px;
        }
    }

    .activeLink{
        background-color: #DEEFFF;
        /* border-bottom: #006FD6 solid 4px; */

        .ico{
            color: #006FD6;
        }


        .txt{
            color: #006FD6;
        }

        .bottom{
            
            background-color: #006FD6;
        }
    }
`

const RightArea = styled.div`
    height: 100%;
    width: 100%;
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 30px;

    .srch-container{
        position: relative;


        .srch-bx{
        height: 36px;
        border-radius: 4px;
        border: 1px solid #DCE1E7;
        outline: none;
        padding-left: 30px;
        padding-right: 6px;
    }
    }


    .bell{
        margin-left: 32.03px;
    }

    .prof-circle{
        border-radius: 50%;
        background-color: #D8D8D8;
        height: 36px;
        width: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 32.18px;
        margin-right: 7px;
    }
    
`



export default function Header() {
    return (
        <Main>
        <img src="./Images/logo.png" alt="Logo"/>
        <h4 className="title">FE Engineer Test 1</h4>

        <LinkArea>

            <NavLink className="aLink" to="/home" activeClassName="activeLink">
                    <img className="ico" src="./Images/Home.png" alt="home"/>
                    <h5 className="txt">Home</h5>
                    <div className="bottom"></div>
            </NavLink>

            <NavLink className="aLink" to="/enteries" activeClassName="activeLink">
                    <img className="ico" src="./Images/Entries.png" alt="home"/>
                    <h5 className="txt">Enteries</h5>
                    <div className="bottom"></div>
            </NavLink>

            <NavLink className="aLink" to="/" exact activeClassName="activeLink">
                    <img className="ico" src="./Images/Divisions.png" alt="home"/>
                    <h5 className="txt">Divisions</h5>
                    <div className="bottom"></div>
            </NavLink>
            
        </LinkArea>

        <RightArea>
            <div className="srch-container">
                <FaSistrix style={{position: "absolute", left: "10px", top: "10px", color: "#979797"}}/>
                <input className="srch-bx" type="search"/>
            </div>
            
            <img className="bell" src="./Images/Bell.png" alt="Bell"/>
            <div className="prof-circle">
                <img src="./Images/Avatar.png" alt="Bell"/>
            </div>
           
            <img src="./Images/Arrow.png" alt="Bell"/>
        </RightArea>
        
        </Main>
    )
}
