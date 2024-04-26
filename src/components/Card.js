import React from 'react'
import styled from 'styled-components'
import User from './User'



function Card() {
  return (
    <Container>
        <Users>
            <div>

            <User src='img/img-3.svg' alt=""/>
            </div>
        </Users>
        <Content>
            <Question>How to add a column on a Pandas DataFrame that is based on the continent a country ?</Question>
            <Desc>What I wanted to do is basically add a column of for all 7 continents, and I want the continents to be assigned based on where the country is located...</Desc>
            <Query>
                <Input/>
                <div>Be a hero, answer their question !</div>
                <button><span>Help Out</span></button>
        </Query>
        </Content>
        <Actions>
            <Action></Action>
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
div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    algin-items:center;
}

`
const Content = styled.div`
width: 494px;
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
right:40px;
top:193px;
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

`


const Actions = styled.div`

`
const Action = styled.div`

`