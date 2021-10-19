import { Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`;

const SearchContainer = styled.div`
     border: 1px solid lightgray;
`;

const Wrapper = styled.div`
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
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
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          input
          <Search />
        </SearchContainer>
      </Left>
      <Center>Centre</Center>
      <Right>Right</Right>
    </Wrapper>
  </Container>
);

export default Navbar;
