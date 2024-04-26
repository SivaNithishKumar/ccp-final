import React from 'react'
import styled from 'styled-components'

const Tag =() => {
  return (
    <Container>
        <img src='img/tag-1.png' alt='' ></img>
        <div>Full Stack Development</div>
    </Container>
  )
}

export default Tag

const Container = styled.div`
width: 109.237px;
height: 78.027px;
flex-shrink: 0;
img{
    border-radius: 3.745px;
}
div{
    color: #FFF;
text-align: center;
font-family: Poppins;
font-size: 6.866px;
font-style: normal;
font-weight: 800;
line-height: normal;
}
`