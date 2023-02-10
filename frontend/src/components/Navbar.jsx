import React from 'react'
import styled from "styled-components";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';

const Styles = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.bg};
  height: 56px;
  z-index:1000;
`
const Wrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content:flex-end;
  height: 100%;
  padding: 0px 20px;
  position:relative;
`
const Search = styled.div`
  width:40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display:flex;
  justify-content: space-between;
  align-items:center;
  border: 1px solid #cccccc;
  border-radius: 30px;
  height:35px;
  overflow:hidden;
  button{
    border:none;
    width:80px;
    color:${({theme}) => theme.text};
    background-color:#cccccc55;
    height:100%;
    cursor:pointer;
    border-left: 1px solid #ccc;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  input{
    width:100%;
    height:100%;
    border:none;
    padding-left:10px;
    background:transparent;
    color:${({theme}) => theme.text};
    font-size:1em;
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
const IconBtn = styled.button`
  background:transparent;
  border:1px solid ${({theme}) => theme.soft};
  border-radius: 2rem;
  margin-right:0.8rem;
  cursor:pointer;
  width:2.2rem;
  height: 2.2rem;
  display:flex;
  justify-content:center;
  align-items:center;
  color: ${({theme}) => theme.text};
`

const User = styled.div`
  display:flex;
  align-items:center;
  gap:0.5rem;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`
const Avatar = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  border-radius: 50%;
  background-color: #999;
  overflow:hidden;
  img{
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center;
  }
`
const Navbar = ({darkMode, setDarkMode}) => {
  const {currentUser} = useSelector(state => state.user);
  return (
    <Styles>
      <Wrapper>
        <Search>
          <input placeholder='Search'/>
          <button>
            <SearchOutlinedIcon/>
          </button>
        </Search>
        <IconBtn onClick={() => setDarkMode(!darkMode)}>
          {
            darkMode?
              <LightModeOutlinedIcon/>:
              <DarkModeOutlinedIcon/>
          }
        </IconBtn>
        {
          currentUser?
          <>
            <IconBtn>
              <VideoCallOutlinedIcon/>
            </IconBtn>
            <User>
              <Avatar>
                <img src={currentUser.img}/>
              </Avatar>
              <span id="username">
                {currentUser.name}
              </span>
            </User>
          </>:
          <Link to="/signin" style={{textDecoration:"none"}}>
            <LoginBtn>
              <AccountCircleOutlinedIcon/>
              <span className='item-name'>
                Signin
              </span>          
            </LoginBtn>
          </Link>
        }
      </Wrapper>
    </Styles>
  )
}

export default Navbar