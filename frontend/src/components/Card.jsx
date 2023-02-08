import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor:pointer;
`

const Image = styled.img`
    width:100%;
    height: 202px;
    background-color: #999;
`

const Details =styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`
const ChannelImage = styled.img`
    width: 36px;
    height:36px;
    border-radius: 50%;
    background-color: #999;
`
const Texts = styled.div`

`
const Title = styled.h1`
    font-size: 1em;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`
const ChannelName = styled.h2`
    font-size: 0.8em;
    color: ${({theme}) => theme.textSoft};
    margin:0.3rem 0px;
`
const Info = styled.div`
    font-size: 0.8em;
    color: ${({theme}) => theme.textSoft};
`
const Card = () => {
  return (
    <Link to={"/video/id"} style={{textDecoration:"none"}}>
        <Container>
            <Image src="https://i.ytimg.com/vi/7RIzXmA38vQ/hq720.jpg"/>
            <Details>
                <ChannelImage/>
                <Texts>
                    <Title>Test Video</Title>
                    <ChannelName> coding channel</ChannelName>
                    <Info>660, 908 views - 1 day ago</Info>
                </Texts>
            </Details>
        </Container>
    </Link>
  )
}

export default Card