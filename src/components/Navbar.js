import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
`;
const Center = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
`;

const Navbar = () => (
  <Container>
    <Wrapper>
      <Left>left</Left>
      <Center>Centre</Center>
      <Right>Right</Right>
    </Wrapper>
  </Container>
);

export default Navbar;
