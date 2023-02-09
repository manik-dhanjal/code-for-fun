import react,{useState} from "react";
import styled from "styled-components";
import logo from "../img/logo.png"

const Container = styled.div`
    display:flex;
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
const InputArea = styled.div`
   flex:1;
`
const Input = styled.div`
    position:relative;
    margin-bottom:0.5rem;
    border-bottom: 1px solid ${({theme}) => theme.textSoft};

    .input{
        width:100%;
        border:none;
        background:none;
        color: ${({theme}) => theme.text};
        padding:0.5rem 0rem;
        font-size: 1em;
        display:block;
        outline: none;
        min-height: 2rem;
        overflow:auto;
        &:focus + .underline {
            width: 100%;
        }
    }
    .placeholder{
        color :${({theme}) => theme.textSoft};
        position:absolute;
        top:50%;
        transform: translateY(-50%);
    }
    .underline{
            content:"";
            height:2px;
            width:0;
            background:${({theme}) => theme.text};
            position:absolute;
            bottom:-1;
            left:0;
            transition: 0.5s ease;
    }

`
const CancelBtn = styled.button`
    background: transparent ;
    color: ${({theme}) => theme.text};
    border: none;
    height: 2.4rem;
    padding:0 1rem;
    border-radius: 10rem;
    font-size: 1em;
    margin-right: 1rem;
    font-weight: 600;
    cursor:pointer;

    &:hover{
        background: ${({theme}) => theme.textSoft+"50"};
    }
`
const SubmitBtn = styled.button`
    background: #3ea6ff ;
    color: #181818;
    border: none;
    height: 2.4rem;
    padding:0 1rem;
    border-radius: 10rem;
    font-size: 1em;
    cursor:pointer;
    font-weight: 600;
    &:hover{
        background: #67b3f5;
    }
`
const ButtonGrp = styled.div`
    display:flex;
    justify-content:end;
`

const CommentInput = ({handleComment, placeholder, avatar }) => {
    const [isBtnVisible, setBtnVisible] = useState(false);
    const [comment, setComment] = useState("");
    return(
        <Container>
                <Avatar>
                    <img  src={logo}/>
                </Avatar>
                <InputArea>
                    <Input onClick={() => setBtnVisible(true)}>
                        <div className="input" contentEditable="true" onInput={(e) => setComment(e.currentTarget.textContent)}>
                        </div>
                        {
                            !comment.length &&
                            <span className="placeholder"> Add a comment...</span>
                        }
                        <span className="underline"/>
                    </Input>
                    {
                        isBtnVisible&&
                        <ButtonGrp>
                            <CancelBtn onClick={() => setBtnVisible(false)}>
                                Cancel
                            </CancelBtn>
                            <SubmitBtn >
                                Comment
                            </SubmitBtn>
                        </ButtonGrp>
                    }
                </InputArea>
        </Container>
    )
}

export default CommentInput;