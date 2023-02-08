import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Container = styled.div`
    display:flex;
    gap: 24px;
    
`

const Content = styled.div`
    flex:5;

`
const VideoWrapper = styled.div`
    
`
const Title = styled.h1`
    font-size:1.2em;
    font-weight: 400;
    margin-bottom: 10px;
    margin-top:20px;
    color: ${({theme}) => theme.text};
`
const Details = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`
const Info = styled.span`
    color: ${({theme}) => theme.textSoft};
`
const ButtonGroup = styled.div`
    display:flex;
    align-items:center;
    gap: 0.5rem;
`
const RateButtons = styled.div`
    display:flex;
    align-items:center;
    border:1px solid ${({theme}) => theme.soft};
    border-radius: 45px;
    height:40px;
    .vr{
        width:1px;
        height:100%;
        background-color:${({theme}) => theme.soft};
    }
`
const RateButton = styled.button`
    font-size: 0.8em;
    color: ${({theme}) => theme.text};
    padding: 0 0.8rem;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    background:transparent;
    border:none;
    .btn-text{
        margin-left: 0.3rem;
    }
`
const Button = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    border:1px solid ${({theme}) => theme.soft};
    border-radius: 45px;
    height:40px;
    font-size: 1em;
    color: ${({theme}) => theme.text};
    width:40px;
    background:transparent;
    cursor:pointer;
    .btn-icon{
        padding:0;
    }
    .btn-text{
        margin-left: 0.3rem;
    }
`
const Recommendation = styled.div`
    flex:2;
`
const Hr = styled.div`
    margin: 1rem 0;
    border:0.5px solid ${({theme}) => theme.soft};
`
const Video = () => {
  return (
    <Container>
        <Content>
            <VideoWrapper>
                <iframe width="100%" height="360px" src="https://www.youtube.com/embed/7RIzXmA38vQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </VideoWrapper>
            <Title>Test Video</Title>
            <Details>
                
                <ButtonGroup>
                    <RateButtons>
                        <RateButton>
                            <ThumbUpOutlinedIcon /> 
                            <span className='btn-text'>132</span>
                        </RateButton>
                        <div className='vr'></div>
                        <RateButton>
                            <ThumbDownOutlinedIcon/>
                        </RateButton>
                    </RateButtons>
                    <Button>
                       <ReplyOutlinedIcon className='btn-icon'/>
                    </Button>
                    <Button>
                        <TurnedInNotOutlinedIcon/>
                    </Button>
                </ButtonGroup>
            </Details>
            <Hr/>
        </Content>
        <Recommendation>

        </Recommendation>
    </Container>
  )
}

export default Video