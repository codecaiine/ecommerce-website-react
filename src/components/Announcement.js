import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500; 
`;

const Announcement = () => (
  <Container>
    Super Deal ! free Shipping
  </Container>
);

export default Announcement;
