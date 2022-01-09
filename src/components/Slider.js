import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background: coral;
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
`;

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
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

const Slider = () => (
  <Container>
    <Arrow direction="left">
      <ArrowLeftOutlined />
    </Arrow>
    <Wrapper>
      <Slide>
        <ImageContainer>
          <Image src="https://i.pinimg.com/564x/e7/b6/45/e7b6458fd21eaa3355c144bbf73ba330.jpg" />
        </ImageContainer>
        <DetailContainer>
          <Title>Summer Sale</Title>
          <Desc>NE ratter pas cette occassion de vous faire plaisir</Desc>
          <Button>SHOP NOW</Button>
        </DetailContainer>
      </Slide>
      <Slide>
        <ImageContainer>
          <Image src="https://i.pinimg.com/564x/e7/b6/45/e7b6458fd21eaa3355c144bbf73ba330.jpg" />
        </ImageContainer>
        <DetailContainer>
          <Title>Summer Sale</Title>
          <Desc>NE ratter pas cette occassion de vous faire plaisir</Desc>
          <Button>SHOP NOW</Button>
        </DetailContainer>
      </Slide>
      <Slide>
        <ImageContainer>
          <Image src="https://i.pinimg.com/564x/e7/b6/45/e7b6458fd21eaa3355c144bbf73ba330.jpg" />
        </ImageContainer>
        <DetailContainer>
          <Title>Summer Sale</Title>
          <Desc>NE ratter pas cette occassion de vous faire plaisir</Desc>
          <Button>SHOP NOW</Button>
        </DetailContainer>
      </Slide>
    </Wrapper>
    <Arrow direction="right">
      <ArrowRightOutlined />
    </Arrow>
  </Container>
);

export default Slider;
