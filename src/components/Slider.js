import { useState } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { sliderItems } from '../data';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background: coral;
overflow: hidden;
`;
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
cursor: pointer;
opacity: 0.5;
left: ${(props) => props.direction === 'left' && '10px'};
right: ${(props) => props.direction === 'right' && '10px'};
`;

const Wrapper = styled.div`
 height: 100%;
 display:flex;
 transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
height: 100%;
flex: 1;
`;

const Image = styled.div`
height: 80%;
`;

const DetailContainer = styled.div`
flex: 1;
padding: 50%;
`;

const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <DetailContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </DetailContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
