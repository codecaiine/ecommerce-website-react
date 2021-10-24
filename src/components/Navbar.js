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
    padding: 0;
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
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold; 
`;

const Right = styled.div`
    flex: 1;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
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
      <Center><Logo>My Logo</Logo></Center>
      <Right>
        <MenuItem>Register</MenuItem>
        <MenuItem>Login</MenuItem>
        <MenuItem>
        </MenuItem>
      </Right>
    </Wrapper>
  </Container>
);

export default Navbar;
