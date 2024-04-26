import React , {useEffect,useState} from 'react'
import styled from 'styled-components'
import User from './User'



function Ask() {

    const [question, setQuestion] = useState('');
    const [description, setDescription] = useState('');

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
        console.log(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const response = await fetch('http://localhost:5000/api/postQues', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "question" : question, "description" : description })
            });

            if (response.ok) {
                console.log('Question added successfully!');
                setQuestion(''); // Reset question input
                setDescription(''); // Reset description input
            } else {
                console.error('Failed to add question');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
  return (
    <Container>
        <Users>
            <User src='img/img-3.svg' alt=""/>
        </Users>
        <Content>
        <Question
                    placeholder='Add your question / doubts here....'
                    value={question}
                    onChange={handleQuestionChange}
                />
                <Desc
                    placeholder='Description....'
                    value={description}
                    onChange={handleDescriptionChange}
                />
            <input required style={{ display: "none" }} type="file" id="file" />
            <Label htmlFor="file">
                <img src='img/addAvatar.png' alt="" />
                <span>Add an avatar</span>
            </Label>
            <Button onClick={handleSubmit}>Ignite</Button>
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