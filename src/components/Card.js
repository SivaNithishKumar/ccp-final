import React , {useState,useEffect} from 'react'
import styled from 'styled-components'
import User from './User'



function Card({ src, question, description }) {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
      setLiked(!liked);
    };
  return (
    <Container>
        <Users>
            <User src={src} alt=""/>
        </Users>
        <Content>
            <Question>{question}</Question>
            <Desc>{description}</Desc>
            <Query>
                <Input placeholder='Be a hero, answer their question !'/>
                <button><span>Help Out</span></button>
            </Query>
        </Content>
        <Actions>
        <Action onClick={handleLike}>
        {liked ? (
          <img src='img/liked.svg' alt='Liked' />
        ) : (
          <img src='img/like.svg' alt='Like' />
        )}
        <div>{liked ? 'Liked' : 'Like'}</div>
      </Action>
            <Action>
                <img src='img/answer.svg'  alt=''/>
                <div>
                    Answer
                </div>
            </Action>
            <Action>
                <img src='img/share.svg'  alt=''/>
                <div>
                    Share
                </div>
            </Action>
            <Action>
                <img src='img/user.svg'  alt=''/>
                <div>
                    Hire
                </div>
            </Action>
        </Actions>
    </Container>
  )
}

export default Card

const Container = styled.div`
width: 722px;
height: 243px;
flex-shrink: 0;
border-radius: 12px;
background: rgba(73, 73, 73, 0.28);
display:flex;
justify-content:space-between;
align-items:space-evenly;
margin-bottom:20px;
`

const Users = styled.div`
padding-top:35px;
width:20%;
    display:flex;
    justify-content:center;
    algin-items:center;
`
const Content = styled.div`
width: 600px;
display:flex;
flex-direction:column;
justify-content:space-evenly;
position:relative;
div{

}
`
const Question = styled.div`
color: #FFF;
font-family: Poppins;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
const Desc = styled.div`
color: #FFF;
font-family: Poppins;
font-size: 13.714px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const Query = styled.div`

div{
    position:absolute;

    margin-top:4px;
    right:140px;
    top:190px;
    
}
button{
    margin-top:2px;
    border-radius: 13.347px;
border: 0.89px solid #FFF;
background: linear-gradient(97deg, rgba(47, 0, 146, 0.35) 32.89%, rgba(84, 3, 255, 0.35) 95.74%);
box-shadow: 0px 3.559px 3.559px 0px rgba(0, 0, 0, 0.25);
width: 72.963px;
height: 22.694px;
position:absolute;
flex-shrink: 0;
right:40px;
top:193px;
span{
    color: #FFF;
font-family: Poppins;
font-size: 10.986px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
}
`

const Input = styled.input`
border-radius: 17.315px;
border: 1.443px solid #2F0092;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0px 2.886px 2.886px 0px rgba(0, 0, 0, 0.25);
width: 417px;
height: 28.958px;
flex-shrink: 0;
position:absolute;
right:30px;
top:190px;
display:flex;
color: #FFF;
font-family: Poppins;
font-size: 17.872px;
font-style: normal;
font-weight: 400;
line-height: normal;
&::placeholder {
    color: #FFF;
font-family: Poppins;
font-size: 14.872px;
font-style: normal;
font-weight: 400;
line-height: normal;
position:absolute;
left:10px;
opacity:0.7;
  }
`


const Actions = styled.div`
width:20%;
display:flex;
flex-direction:column;
justify-content:center;
`
const Action = styled.div`
display:flex;
justify-content:center;
width: 150.501px;
height: 35.784px;
flex-shrink: 0;
img{
    width: 18.715px;
    height: 19.049px;
    flex-shrink: 0;
    stroke-width: 2.105px;
    stroke: #FFF;
    margin: 0 10px;
}
div{
    color: #FFF;
font-family: Poppins;
font-size: 16.944px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`