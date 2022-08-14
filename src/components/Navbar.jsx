import React from 'react'
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Container = styled.div `
height: 60px;
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
`
const Language = styled.span`
font-size: 14px;
cursor: pointer;`

const Left = styled.div`
flex: 1;`

const Center = styled.div`
flex: 1;
text-align: center;`

const Logo = styled.h1`
  font-weight: bold;
  font-size: 42px;
  color: black;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;`

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
`

const Navbar = () => {
  return (
    <Container>
    <Wrapper>
        <Left><Language>EN</Language></Left>
      
        <Center><Logo>Nepal-Anime_Mart</Logo> </Center>
        <Right>
          <MenuItems>REGISTER</MenuItems>
        <MenuItems>SIGN IN</MenuItems>
        <MenuItems>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon/>
      </Badge>
        </MenuItems>
        </Right>
        </Wrapper>
        </Container>
  )
}

export default Navbar