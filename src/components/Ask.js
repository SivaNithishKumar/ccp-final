import React from 'react'
import styled from 'styled-components'
import User from './User'



function Ask() {
  return (
    <Container>
        <Users>
            <User src='img/img-3.svg' alt=""/>
        </Users>
        <Content>
            <Question placeholder='Add you question / doubts here....'/>
            <Desc placeholder='Description....'/>
            <input required style={{ display: "none" }} type="file" id="file" />
            <Label htmlFor="file">
                <img src='img/addAvatar.png' alt="" />
                <span>Add an avatar</span>
            </Label>
            <Button>Ignite</Button>
        </Content>
    </Container>
  )
}

export default Ask

const Container = styled.div`
width: 722px;
height: 402px;
flex-shrink: 0;
border-radius: 12.028px;
background: rgba(73, 73, 73, 0.28);
display:flex;
justify-content:space-between;
align-items:space-evenly;
margin-bottom:20px;
`
const Button = styled.button`
border-radius: 13.378px;
border: 0.892px solid #FFF;
background: linear-gradient(97deg, rgba(47, 0, 146, 0.35) 32.89%, rgba(84, 3, 255, 0.35) 95.74%);
box-shadow: 0px 3.567px 3.567px 0px rgba(0, 0, 0, 0.25);
width: 119px;
height: 27px;
flex-shrink: 0;
color: #FFF;
text-align: center;
font-family: Poppins;
font-size: 13.017px;
font-style: normal;
font-weight: 700;
line-height: normal;

`

const Label = styled.label`
display:flex;
justify-content:center;
align-items:center;
img{
    width:30px;
}
span{
    color: #FFF;
font-family: Poppins;
font-size: 17.872px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
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
align-items:center;
position:relative;
margin-left:-300px;
div{

}
`
const Question = styled.input`
width: 537.333px;
height: 49.333px;
flex-shrink: 0;
border-radius: 12.953px;
border: 0.418px solid #FFF;
border: 1.443px solid #2F0092;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0px 2.886px 2.886px 0px rgba(0, 0, 0, 0.25);
flex-shrink: 0;
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
const Desc = styled.input`
width: 537.333px;
height: 129.333px;
flex-shrink: 0;
border-radius: 12.953px;
border: 0.418px solid #FFF;
border: 1.443px solid #2F0092;
background: rgba(255, 255, 255, 0.15);
box-shadow: 0px 2.886px 2.886px 0px rgba(0, 0, 0, 0.25);

flex-shrink: 0;
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
