import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 20px 10px;
`;

const Navbar = () => (
  <Container>
    <Wrapper>
      Navbar
    </Wrapper>
  </Container>
);

export default Navbar;
