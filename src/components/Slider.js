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
display: flex;
align-items: center;
`;

const ImageContainer = styled.div`
flex: 1;
`;

const Image = styled.div``;

const DetailContainer = styled.div`
flex: 1;
`;

const Slider = () => (
  <Container>
    <Arrow direction="left">
      <ArrowLeftOutlined />
    </Arrow>
    <Wrapper>
      <ImageContainer>
        <Image src="https://i.pinimg.com/564x/e7/b6/45/e7b6458fd21eaa3355c144bbf73ba330.jpg" />
      </ImageContainer>
      <DetailContainer />
    </Wrapper>
    <Arrow direction="right">
      <ArrowRightOutlined />
    </Arrow>
  </Container>
);

export default Slider;
