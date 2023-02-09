import React from 'react'
import styled from 'styled-components'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import TurnedInNotOutlinedIcon from '@mui/icons-material/TurnedInNotOutlined';
import TurnedInOutlinedIcon from '@mui/icons-material/TurnedInOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import logo from "../img/logo.png";
import SideCard from '../components/SideCard';
import Comment from '../components/Comment.jsx';
import CommentInput from "../components/CommentInput.jsx";

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
    font-size:1.5em;
    font-weight: 600;
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
    height:2.5rem;
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
    border-radius: 10rem;
    height:2.5rem;
    font-size: 1em;
    color: ${({theme}) => theme.text};
    width:2.5rem;
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
const ChannelDetails = styled.div`
    display:flex;
    align-items:center;
    gap:0.7rem;
`
const ChannelImg = styled.div`
    overflow:hidden;
    width:2.5rem;
    img{
        width:100%;
        height: 100%;
        object-fit:cover;
        object-position:center;
    }
`
const ChannelInfo = styled.div`
    
`
const ChannelSubs = styled.p`
    color:${({theme}) => theme.textSoft};
    font-size:0.8em;
    font-weight:400;
`
const ChannelName = styled.h3`
    color:${({theme}) => theme.text};
    font-size:1em;
    font-weight:600;
`
const SubscribeButton = styled.button`
    background: ${({theme}) => theme.text};
    color: ${({theme}) => theme.bg};
    border:none;
    border-radius: 10rem;
    padding: 0 1.5rem;
    font-size: 1em;
    height: 2.5rem;
    font-weight:600;
    cursor:pointer;
    &:hover{
        background-color: ${({theme}) => theme.textSoft}
    }
`
const DescriptionContainer = styled.div`
    padding: 0.5rem;
    background: ${({theme}) => theme.bg};
    border-radius: 0.5rem;
    color: ${({theme}) => theme.text};
    display:flex;
    flex-direction:column;
    margin-bottom:2rem;

`
const VideoInfo = styled.div`
    margin-bottom:0.5rem;
    font-weight: 600;
`
const Description = styled.div`
    
`
const ViewMoreBtn = styled.button`
    align-self:flex-end;
    background:none;
    border:none;
    font-weight:500;
    color: ${({theme}) => theme.text};
    cursor:pointer;
`
const Comments = styled.div`
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    margin-top:3rem;
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
                <ChannelDetails>
                    <ChannelImg>
                        <img src={logo} alt="channel name"/>
                    </ChannelImg>
                    <ChannelInfo>
                        <ChannelName>Code for fun</ChannelName>
                        <ChannelSubs>183k subscribers</ChannelSubs>
                    </ChannelInfo>
                    <SubscribeButton>
                        Subscribe
                    </SubscribeButton>
                </ChannelDetails>
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
            <DescriptionContainer>
                <VideoInfo>
                    62,042 views  Jun 30, 2022
                </VideoInfo>
                <Description>
                    React.js Real-World Projects
                    Video uploading app design using React and Styled Components. Youtube clone design with hooks and functional component. React video player.
                </Description>
                <ViewMoreBtn>
                    View More
                </ViewMoreBtn>
            </DescriptionContainer>
            <CommentInput/>
            <Comments>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </Comments>
        </Content>
        <Recommendation>
            <SideCard/>
            <SideCard/>
            <SideCard/>
            <SideCard/>
            <SideCard/>
            <SideCard/>
        </Recommendation>
    </Container>
  )
}

export default Video