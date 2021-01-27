import React from 'react'
import styled from "styled-components"

const Main = styled.div`
    background-color: #fff;
    width: 100%;
    height: 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 0 0 6px 6px;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: space-around;

    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 6;
`

export default function ListArea() {
    return (
        <Main>
            
        </Main>
    )
}
