import React from 'react'
import styled from "styled-components"
import logo from "../img/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled.div`
    flex:1;
    background-color: ${({theme}) => theme.bg};
    height: 100vh;
    color: ${({theme}) => theme.text};
    display:flex;
    flex-direction:column;
    position: sticky; 
    top:0;
`
const Scroll = styled.div`
    overflow-y:auto;
    height: 100%;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    &:hover{
        scrollbar-color: grey transparent;
    }
`
const Wrapper = styled.div`
    padding: 0.5rem 1rem;
    padding-top:0px;
`

const Logo = styled.div`
    display:flex;
    align-items:center;
    padding:1rem;
    padding-bottom:0.5rem;
    #logo-cont{
        width:35px;
    }
    #logo-text{
        font-size:1em;
        font-weight:700;
        white-space:nowrap;
        margin-left:0.5rem;
        color: ${({theme}) => theme.text};
        text-decoration: none;
    }
    img{
        object-fit:contain;
        object-position:left center;
        width:100%;
        height:100%;
    }
`

const Item = styled.div`
    display:flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 0.5rem;
    border-radius:0.5rem;
    margin: 0.2rem 0;
    &:hover{
        background-color:#ffffff11;
    }
    .item-name{
        white-space:nowrap;
        margin-bottom:0.2em;
        max-width: 120px; 
        overflow: hidden;
        text-overflow: ellipsis;
        font-size:1em;
    }
`
const Title = styled.div`
    font-size:1.05em;
    font-weight:600;
    padding: 0.2rem 0.5rem;
`
const SubItem = styled.div`
    display:flex;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    border-radius:0.5rem;
    margin: 0.2rem 0;
    &:hover{
        background-color:#ffffff11;
    }
    .item-name{
        white-space:nowrap;
        margin-bottom:0.2em;
        max-width: 120px; 
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .item-icon{
        border-radius:100rem;
        width:2rem;
        overflow:hidden;
        margin-right:0.5rem;
        img{
            object-fit:cover;
            object-position:center;
            width:100%;
            height:100%;
        }
    }
`
const Button = styled.button`
    display:flex;
    align-items:center;
    padding: 0.3rem 0.5rem;
    border-radius:0.5rem;
    width:100%;
    color:${({theme}) => theme.text};
    background-color:#ffffff11;
    border:none;
    font-size:16px;
    cursor:pointer;
    &:hover{
        background-color:#ffffff22;
    }
    .item-name{
        margin-left:1rem;
    }
`
const Login = styled.div`
    margin: 1rem 0;
    p{
        margin-bottom:0.5rem;
    }
`
const LoginBtn = styled.button`
    color:#3ea6ff;
    display:flex;
    align-items:center;
    border:1px solid ${({theme}) => theme.soft};
    border-radius:10rem;
    font-size:1em;
    padding: 0.3rem 0.5rem;
    padding-right: 1rem;
    cursor:pointer;
    background:transparent;
    .item-name{
        margin-left:0.5em;
        margin-bottom:0.1em;

    }
    &:hover{
        background:#3ea6ff55;
    }
`
const Hr = styled.div`
    margin: 0.5rem 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
    height: 0.5px;
`
const Menu = () => {
  return (
    <Container>
        <Link to="/" style={{textDecoration: "none"}}>
            <Logo>
                <span id="logo-cont">
                    <img  src={logo} alt="Code for Fun"/>
                </span>
                <span id="logo-text">
                    Code for Fun
                </span>
            </Logo>
        </Link>
        <Scroll>
            <Wrapper>
                <Item>
                    <HomeIcon/>
                    Home
                </Item>
                <Item>
                    <ExploreOutlinedIcon/>
                    Explore
                </Item>
                <Item>
                    <SubscriptionsOutlinedIcon/>
                    Subscriptions
                </Item>
                <Hr/>
                <Item>
                    <VideoLibraryOutlinedIcon/>
                    Library
                </Item>
                <Item>
                    <HistoryOutlinedIcon/>
                    History
                </Item>
                <Item>
                    <OndemandVideoOutlinedIcon/>
                    <span className='item-name'>Your Tutorials</span>
                </Item>
                <Item>
                    <WatchLaterOutlinedIcon/>
                    <span className='item-name'>Watch Later</span>
                </Item>
                <Item>
                    <ThumbUpOutlinedIcon/>
                    <span className='item-name'>Liked Tutorials</span>
                </Item>
                <Hr/>
                <Login>
                    <p>Sign in to like videos, comment and subscribe</p>
                    <Link to={"/signin"} style={{textDecoration:"none"}}>
                        <LoginBtn>
                            <AccountCircleOutlinedIcon/>
                            <span className='item-name'>
                                Login
                            </span>
                        </LoginBtn>
                    </Link>
                </Login>
                <Hr/>
                <Title>
                    Subscriptions
                </Title>
                <SubItem>
                    <span className="item-icon">
                        <img src={logo} alt="subscribed to"/>
                    </span>
                    <span className="item-name">
                        code for fun
                    </span>
                </SubItem>
                <SubItem>
                    <span className="item-icon">
                        <img src={logo} alt="subscribed to"/>
                    </span>
                    <span className="item-name">
                        code for fun
                    </span>
                </SubItem>
                <SubItem>
                    <span className="item-icon">
                        <img src={logo} alt="subscribed to"/>
                    </span>
                    <span className="item-name">
                        code for fun
                    </span>
                </SubItem>
                <SubItem>
                    <span className="item-icon">
                        <img src={logo} alt="subscribed to"/>
                    </span>
                    <span className="item-name">
                        code for fun
                    </span>
                </SubItem>
                <SubItem>
                    <span className="item-icon">
                        <img src={logo} alt="subscribed to"/>
                    </span>
                    <span className="item-name">
                        code for fun
                    </span>
                </SubItem>
                <Button>
                    <KeyboardArrowDownOutlinedIcon/>
                    <span className="item-name">
                        View More
                    </span>
                </Button>
                <Hr/>
                <Item>
                    <SettingsIcon/>
                    <span className="item-name">
                        Settings
                    </span>
                </Item>
                <Item>
                    <FlagOutlinedIcon/>
                    <span className="item-name">
                        Report
                    </span>
                </Item>
                <Item>
                    <HelpOutlineOutlinedIcon/>
                    <span className="item-name">
                        Help
                    </span>
                </Item>
            </Wrapper>
        </Scroll>
    </Container>
  )
}

export default Menu