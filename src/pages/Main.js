import React from 'react'
import { Container} from 'react-bootstrap'
import styled from 'styled-components'
import  { useEffect, useState } from 'react';
import Card from '../components/Card'
import User from '../components/User'
import Tag from '../components/Tag'


function Main() {
    const img1 = 'img/Ellipse 2 (1).svg'
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/questions')
        .then(response => response.json())
        .then(data => setQuestions(data))
        .catch(error => console.error('Error:', error));
    }, []);





  return (
    <Container style={{height:'200vh',backgroundColor:'#13003C'}}>
        <Nav>
        <Title>Collab Cafe</Title>
        <Query>
            <Input placeholder='Brain stuck? Find your spark here !' />
            {/* <div>Brain stuck? Find your spark here !</div> */}
            <button><span>IGNITE</span></button>
        </Query>
        </Nav>
        <Body >
            <Left>
                <Profile>
                    <User src='img/img-3.svg' alt=''/>
                    <div>User</div>
                </Profile>
            </Left>
            <Center>
                <Tags>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                    <Tag/>
                </Tags>
                <Users >
                    <User src='img/Ellipse 2.svg' />
                    <User src='img/img-3.svg' />
                    <User src='img/img-4.svg' />
                    <User src={img1} />
                    <User src='img/img-5.svg' />
                    <User src='img/img-6.svg' />
                </Users>
                <Cards>
                {questions.map((question) => (
        <Card
          key={question._id}
          src="img/img-3.svg" // Static image for now
          question={question.question}
          description={question.description}
        />
      ))}
                </Cards>
                
                </Center>
            <Right></Right>
        </Body>
    </Container>
  )
}

export default Main

const Nav = styled.div`
display: flex;

background: #494949;
width: 100vw;
height: 48px;
flex-shrink: 0;
margin-bottom:80px;
`
const Title = styled.div`
position:absolute;
top:7px;
left:60px;
color: #FFF;
font-family: Poppins;
font-size: 25px;
font-style: normal;
font-weight: 900;
line-height: normal;
`

const Query = styled.div`

div{
    position:absolute;

    margin-top:4px;
    right:120px;
    top:10px;
    color: #FFF;
font-family: Poppins;
font-size: 17.872px;
font-style: normal;
font-weight: 400;
line-height: normal;
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
right:16px;
top:13px;
span{
    color: #FFF;
font-family: Poppins;
font-size: 12.986px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
}
`

const Input = styled.input`
color: white;
font-family: Poppins;
font-size: 17.872px;
font-style: normal;
font-weight: 400;
line-height: normal;
border-radius: 17.315px;
border: 1.443px solid #2F0092;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0px 2.886px 2.886px 0px rgba(0, 0, 0, 0.25);
width: 417px;
height: 28.958px;
flex-shrink: 0;
position:absolute;
right:10px;
top:9px;
display:flex;
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

const Left = styled.div`
border-radius: 0px 12px 12px 0px;
background: rgba(73, 73, 73, 0.28);
width: 300px;
height: 604px;
z-index:1;
poition:absolute;
`

const Center = styled.div`

width: 722px;

flex-shrink: 0;
`
const Body = styled.div`
display:flex;
justify-content:space-between;
`
const Right = styled.div`
border-radius: 12px 0px 0px 12px;
background: rgba(73, 73, 73, 0.28);
width: 300px;
height: 604px;
flex-shrink: 0;
`

const Cards = styled.div`

`
const Users = styled.div`
margin-bottom:40px;
display:flex;
justify-content:space-between;
`

const Tags =styled.div`
margin-bottom:40px;
display:flex;
justify-content:space-between;
`

const Profile = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
flex-direction:column;
padding:30px 0;
div{
    margin:10px 0 0 0;
    color: #FFF;
font-family: Poppins;
font-size: 23.063px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`