import React from 'react'
import Header from './../Components/Header'
import styled from "styled-components"

const MainBody = styled.div`
        height: 300px;
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
`

export default function Home() {
    return (
        <MainBody>
            <Header/>
            Hello
        </MainBody>
    )
}
