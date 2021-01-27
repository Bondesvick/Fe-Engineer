import React from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
import { FaSistrix } from "react-icons/fa";

const Main = styled.div`
    background-color: #FFFFFF;
    width: 1440px;
    border-bottom: #DCE1E7 solid 1px;
    height: 52px;
    display: flex;
    align-items: center;
    padding-left: 26px;

    .title{
        font-family: Google Sans;
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

        .ico{
            color: #fff;
        }

        .txt{
            color: #778699;
            padding-left: 9.2px;
            text-decoration: none;
        }
    }

    .activeLink{
        background-color: #DEEFFF;
        border-bottom: #006FD6 solid 4px;

        .ico{
            color: #006FD6;
        }


        .txt{
            color: #006FD6;
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

    .srch-bx{
        height: 36px;
        border-radius: 4px;
        border: 1px solid #DCE1E7;
        outline: none;
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
        <img src="./logo.png" alt="Logo"/>
        <h4 className="title">FE Engineer Test 1</h4>

        <LinkArea>

            <NavLink className="aLink" to="/home" activeClassName="activeLink">
                    <img className="ico" src="./Home.png" alt="home"/>
                    <h5 className="txt">Home</h5>
            </NavLink>

            <NavLink className="aLink" to="/enteries" activeClassName="activeLink">
                    <img className="ico" src="./Entries.png" alt="home"/>
                    <h5 className="txt">Enteries</h5>
            </NavLink>

            <NavLink className="aLink" to="/" exact activeClassName="activeLink">
                    <img className="ico" src="./Divisions.png" alt="home"/>
                    <h5 className="txt">Divisions</h5>
            </NavLink>
            
        </LinkArea>

        <RightArea>
        <FaSistrix/>
            <input className="srch-bx" type="search"/>
            <img className="bell" src="./Bell.png" alt="Bell"/>
            <div className="prof-circle">
                <img src="./Avatar.png" alt="Bell"/>
            </div>
           
            <img src="./Arrow.png" alt="Bell"/>
        </RightArea>
        
        </Main>
    )
}