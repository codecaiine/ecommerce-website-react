import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
`;


const Slider = () => (
  <Container>
    <Arrow>
      <ArrowLeftOutlined />
    </Arrow>
    <Arrow>
      <ArrowRightOutlined/>
    </Arrow>
  </Container>
);

export default Slider;
