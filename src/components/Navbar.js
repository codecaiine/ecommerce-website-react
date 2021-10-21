import { Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`;

const SearchContainer = styled.div`
     border: 0.5px solid lightgray;
     display: flex;
     align-items: center;
     margin-left: 25px;
     padding: 5px;
`;

const Input = styled.input`
     border: none;
`;

const Wrapper = styled.div`
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
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
          <Input />
          <Search />
        </SearchContainer>
      </Left>
      <Center>Centre</Center>
      <Right>Right</Right>
    </Wrapper>
  </Container>
);

export default Navbar;
