import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
`;
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-raduis: 50%;
display: flex;
aligns-item: center;
justify-content: center;
`;

const Slider = () => (
  <Container>
    <Arrow>
      <ArrowLeftOutlined />
    </Arrow>
    <Arrow>
      <ArrowRightOutlined />
    </Arrow>
  </Container>
);

export default Slider;
