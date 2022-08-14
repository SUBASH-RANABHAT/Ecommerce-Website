import { useState } from "react"
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from "@mui/icons-material"
import styled from "styled-components"
import { sliderItems } from "../data"

const Container =styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: white;
    position: relative;
    overflow: hidden;  //block page from sliding 
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color:#fff7f7;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    position: absolute;
    top: 0;     //
    bottom: 0;   //to put the arrow in middle 
    margin: auto;  //
    left: ${props=> props.direction === "left" && "10px"};       // to make arrow in appropiate direction 
    right: ${props=> props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5; //transparent banauna 
    z-index: 2;
`

const Wrapper = styled.div`
height: 100px;
display: flex;
transform: translateX(${props=>props.sliderIndex * -100}vw);
transition: all 1s ease;
`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg};
`
const ImageConatiner = styled.div`
flex: 1;
height: 100%;`

const Image = styled.img`
height: 80%;

`

const InfoContainer = styled.div`
flex: 1;
padding: 50px;`

const Title = styled.h1`
font-size: 70px;
font-style: italic; `

const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;

const Button = styled.button`
padding: 5px;
font-size: 20px;
background-color: black;
color: white;
cursor: pointer;
border-radius: 50px;
font-style: italic;`


const Slider = () => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const handleClick = (direction) => {
      if(direction==="left"){
        setSliderIndex(sliderIndex > 0 ? sliderIndex-1 : 2 )
      }else {
        setSliderIndex(sliderIndex < 2 ? sliderIndex +1 : 0 )
      }
    };
  return (
    <Container>
        <Arrow direction ="left" onClick={()=> handleClick("left")}><KeyboardArrowLeftOutlined/></Arrow>
        <Wrapper sliderIndex={sliderIndex}> 
          {sliderItems.map(item=>(
            <Slide bg={item.bg}>
            <ImageConatiner>
                <Image src ={item.img}/>
            </ImageConatiner>
            <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>SHOP NOW</Button>
            </InfoContainer>
            </Slide>  
            ))}      
            </Wrapper>
            <Arrow direction="right" onClick={()=> handleClick("right")} ><KeyboardArrowRightOutlined/></Arrow>
    </Container>
  )
}

export default Slider