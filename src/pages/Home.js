import React from 'react'
import styled from 'styled-components';
import { useNavigate, Link } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

  return (
    <Container >
        <Img src='img/background.png'/>
        <Back1 src='img/back-2.png' alt="background"/>
        <Back2 src='img/back-1.png'/>
        
        <Top>
            <Title>Collab Cafe</Title>
        </Top>
        <Query>
            <div>Brain stuck? Find your spark here !</div>
            <button><span>IGNITE</span></button>
        </Query>
        <Body>
            <div>Don't Do it alone!</div>
            <div> Connect And conquer your goals.</div>
        </Body>
        <Go>
            <Link to="/main"><div>Let's Go</div></Link>
        </Go>
    </Container>
  )
}

export default Home

const Top = styled.div`

position:absolute;
top:10px;
left:60px;
`

const Title = styled.div`
color: #FFF;
font-family: Poppins;
font-size: 25px;
font-style: normal;
font-weight: 900;
line-height: normal;
`
const Container = styled.div`
width:100vw;
height:100vh;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding-left:60px;
padding-right:60px;
padding-top:30px;
background: url(img/background.png) cover no-repeat;
`
const Query = styled.div`
margin-left:-100px;
border-radius: 17.315px;
border: 1.443px solid #2F0092;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0px 2.886px 2.886px 0px rgba(0, 0, 0, 0.25);
width: 417px;
height: 38.958px;
flex-shrink: 0;
position:absolute;
top:20%;
display:flex;
div{position:absolute;

    margin-top:9px;
    left:20px;
    color: #FFF;
font-family: Poppins;
font-size: 17.872px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
button{
    margin-top:6px;
    border-radius: 13.347px;
border: 0.89px solid #FFF;
background: linear-gradient(97deg, rgba(47, 0, 146, 0.35) 32.89%, rgba(84, 3, 255, 0.35) 95.74%);
box-shadow: 0px 3.559px 3.559px 0px rgba(0, 0, 0, 0.25);
width: 72.963px;
height: 26.694px;
position:absolute;
flex-shrink: 0;
right:10px;
span{
    color: #FFF;
font-family: Poppins;
font-size: 12.986px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
}
`

const Body = styled.div`
top:40%;
margin-left:-100px;
position:absolute;
z-index:1;
justify-self:center;
text-align: center;
background: linear-gradient(90deg, rgba(153, 153, 153, 0.75) 22.4%, #FFF 39.9%, rgba(248, 248, 248, 0.98) 60.9%, rgba(153, 153, 153, 0.75) 76.4%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
div{
    text-align: center;
    text-shadow: 0px 0px 7.5px rgba(255, 255, 255, 0.30);
    font-family: "IBM Plex Sans Thai";
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: 120.466%; /* 66.256px */
    text-transform: capitalize;

}
`

const Img = styled.img`
postion:absolute:
z-index:-1;
`

const Back1 = styled.img`
position:absolute;
width: 1007.443px;
height: 1335px;
transform: rotate(-39.381deg);
flex-shrink: 0;
right:0;
`
const Back2 =styled.img`
position:absolute;
left:0;
`

const Go = styled.div`
position:absolute;
z-index:1;
bottom:150px;
left :45%;
width: 188.514px;
height: 47.449px;
flex-shrink: 0;
border-radius: 23.725px;
border: 1.582px solid #FFF;
background: linear-gradient(97deg, rgba(47, 0, 146, 0.35) 32.89%, rgba(84, 3, 255, 0.35) 95.74%);
box-shadow: 0px 6.327px 6.327px 0px rgba(0, 0, 0, 0.25);
div{
    margin-top:10px;
    color: #FFF;
text-align: center;
font-family: Poppins;
font-size: 22px;
font-style: normal;
font-weight: 900;
line-height: normal;
}
`
const LinearGradient = styled.div``

const View = styled.div`
`
const Text= styled.div`
`