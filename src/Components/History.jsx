import React from 'react'
import styled from "styled-components"

const Main = styled.div`
    background-color: #fff;
    width: 258px;
    height: 258px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-around;
    padding-left: 16px;

    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 4;
    grid-row-end: 6;
`

export default function History() {
    return (
        <Main>
            
        </Main>
    )
}
