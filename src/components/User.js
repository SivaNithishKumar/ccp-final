import React from 'react'
import styled from 'styled-components'


const User = ({src}) => {
  return (
    <Container>
        <Img src={src}></Img>
    </Container>
  )
}

export default User

const  Container = styled.div`
width: 45px;
height: 45px;
flex-shrink: 0;
`

const Img = styled.img `
border-radius: 45px;
border: 1px #2F0092;
background: url(public/img/img-3.svg) lightgray 50% / cover no-repeat, #D9D9D9;
`