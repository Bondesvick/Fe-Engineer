import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

const Main = styled.div`
    background-color: #FFFFFF;
    width: 1440px;
    border-bottom: #DCE1E7 solid 1px;
    height: 52px;
    display: flex;
    align-items: center;
    padding-left: 26px;
`



export default function Header() {
    return (
        <Main>
        <img src="./logo.png" alt="Logo"/>
        <h5>FE Engineer Test 1</h5>
        </Main>
    )
}
