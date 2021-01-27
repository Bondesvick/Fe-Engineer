import React from 'react'
import styled from "styled-components"

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
    justify-content: space-around;

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

    /* scrollbar,
    scrollbar-thumb {
        width: 26px;
        border-radius: 13px;
        background-clip: padding-box;
        border: 10px solid transparent;
    }  */
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

function HeadItem({val}){
    return(<div>
        <p>{val}</p>
    </div>)
}

export default function ListArea() {
    return (
        <Main>
            <Top>
                <input className="chkbx" type="checkbox"/>
                <HeadItem val="NAME"/>
                <HeadItem val="LOCATION"/>
                <HeadItem val="STATUS"/>
                <HeadItem val="ENTERIES"/>
                <HeadItem val="RISK PROFILE"/>
            </Top>
            <Content>
                <ListItem>
                    <input className="chkbx" type="checkbox"/>
                </ListItem>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </Content>
            
            
        </Main>
    )
}
