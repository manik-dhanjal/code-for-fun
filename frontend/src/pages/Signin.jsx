import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height: calc(100vh - 104px);
    color: ${({theme}) => theme.text};
`
const Wrapper = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    background: ${({theme}) => theme.bgLighter};
    border: 1px solid ${({theme}) => theme.soft};
    padding: 1.5rem 4rem;
    gap:0.5rem;
`
const Title= styled.h1`
    font-size:1.5em;
`;
const SubTitle= styled.h2`
    font-size:1.2em;

`;
const Input =styled.input`
    border-radius:0.2rem;
    border: 1px solid ${({theme}) => theme.soft};
    outline:none;
    padding: 0.5rem;
    background-color:transparent;
    width:100%;
    color: ${({theme}) => theme.text};
`;
const Button = styled.button`
    border-radius: 0.2rem;
    border:none;
    padding: 0.5rem 1rem;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({theme}) => theme.soft};
    color: ${({theme}) => theme.textSoft};
`
const More = styled.div`
    display:flex;
    margin-top:0.8rem;
    font-size: 0.8em;
    color: ${({theme}) => theme.textSoft};
`
const ALinks = styled.div`
display:flex;
    margin-left: 5rem;
`
const ALink = styled.div`
    margin-left: 1.5rem;
`
const Signin = () => {
  return (
    <Container>
        <Wrapper>
            <Title>
                Sign in
            </Title>
            <SubTitle>
                to continue to Code for fun
            </SubTitle>
            <Input placeholder="username"/>
            <Input placeholder='password' type="password"/>
            <Button>Sign in</Button>

            <Title>or</Title>

            <Input placeholder="username"/>
            <Input placeholder='E mail' type="email"/>
            <Input placeholder='password' type="password"/>
            <Button>Sign up</Button>
        </Wrapper>
        <More>
            English(India)
            <ALinks>
                <ALink>Help</ALink>
                <ALink>Terms</ALink>
                <ALink>Privacy</ALink>
            </ALinks>
        </More>
    </Container>
  )
}

export default Signin