import React from 'react'
import styled from "styled-components";
import logo from "../img/logo.png"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

const Container = styled.div`
 display:flex; 
`
const Wrapper = styled.div`
  flex:1; 
  color:${({theme}) => theme.text};
`
const Avatar = styled.div`
    width:2.5rem;
    height:2.5rem;
    margin-right: 1rem;
    border-radius:50%;
    overflow:hidden;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        object-position:contain;
    }
`
const ChannelInfo = styled.div`
  margin-bottom:0.4rem;
`
const Name= styled.span`
  font-weight: 500;
  margin-right:0.5rem;
`
const Date = styled.span`
    color:${({theme}) => theme.textSoft};
`
const Text = styled.div`
  margin-bottom:0.4rem;
`
const Buttons = styled.div`
  display:flex;
  align-items:center;
  gap:1rem;
`
const Button = styled.button`
    display:flex;
    align-items:center;
    background:transparent;
    border:none;
    color:${({theme}) => theme.text};
    font-size:1em;
    gap:0.5rem;
    cursor:pointer;
`
const Comment = () => {
  return (
    <Container>
      <Avatar>
        <img src={logo}/>
      </Avatar>
      <Wrapper>
        <ChannelInfo>
            <Name>
              @ossamaganne5851
            </Name>
            <Date>
              6 months ago
            </Date>
        </ChannelInfo>
        <Text>
            i would love to see more videos about Typescript React app instead of Js only because people will down grade easily to work with Js only and i want to thank you about the effort you made creating these awesome tutorials
        </Text>
        <Buttons>
          <Button>
            <ThumbUpOutlinedIcon/>
            8
          </Button>
          <Button>
            <ThumbDownOutlinedIcon/>
          </Button>
        </Buttons>
      </Wrapper>
    </Container>
  )
}

export default Comment