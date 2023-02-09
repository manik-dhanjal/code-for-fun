import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
    margin-bottom:1.2rem;
    cursor:pointer;
    display:flex;
    gap:0.5rem;
    align-items:start;
`

const Image = styled.div`
    width:50%;
    /* height:10px; */
    overflow:hidden;
    border-radius:0.3rem;
    height:auto;
    display:inline-block;
    
    img{
        width:100%;
        height: 100%;
        object-fit: cover;
        object-position:center;
    }
`

const Details =styled.div`
    display: flex;
    flex-direction:column;
    width:50%;
`
const Title = styled.h1`
    font-weight: 500;
    color: ${({theme}) => theme.text};
    margin-bottom:0.3rem;
    overflow:hidden;
    max-height: 2.5em;
    font-size: 1em;
    text-overflow: ellipsis;
    white-space:normal;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
`
const ChannelName = styled.h2`
    font-size: 0.9em;
    color: ${({theme}) => theme.textSoft};
    font-weight: 400;
    margin-bottom:0.2rem;
`
const Info = styled.div`
    font-size: 0.9em;
    color: ${({theme}) => theme.textSoft};
`
const SideCard = () => {
  return (
    <Link to={"/video/id"} style={{textDecoration:"none"}}>
        <Container>
            <Image>
                <img src="https://i.ytimg.com/vi/7RIzXmA38vQ/hq720.jpg"/>
            </Image>
            <Details>
                <Title>Test Video what is my nameitis too long cdsc sdc</Title>
                <ChannelName> coding channel</ChannelName>
                <Info>660, 908 views - 1 day ago</Info>
            </Details>
        </Container>
    </Link>
  )
}

export default SideCard