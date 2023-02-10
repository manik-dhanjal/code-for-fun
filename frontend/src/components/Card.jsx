import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {format} from "timeago.js";
import axios from 'axios';

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
const Card = ({video}) => {
    const [channel, setChannel] = useState({});
    useEffect(() =>{
        const fetchChannel = async () => {
            try{
            const res = await axios.get(`/user/find/${video.userId}`);
            setChannel(res.data);
            }catch(e){
            console.log(e);
            }
        }
        fetchChannel();
    },[video.userId]);
  return (
    <Link to={"/video/id"} style={{textDecoration:"none"}}>
        <Container>
            <Image src={video.thumbUrl}/>
            <Details>
                <ChannelImage src={channel.img}/>
                <Texts>
                    <Title>{video.title}</Title>
                    <ChannelName>{channel.name}</ChannelName>
                    <Info>{video.views} views - {format(video.createdAt)}</Info>
                </Texts>
            </Details>
        </Container>
    </Link>
  )
}

export default Card