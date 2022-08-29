import React, { useState } from "react";
import styled from "styled-components";

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  float: right;
  padding: 20px 20px 0px 0px;
`;

const BurgerLine = styled.div`
  height: 3px;
  background-color: white;
  width: 30px;
  margin-bottom: 7px;
`;

const BurgerNavContainer = styled.div`
  background-color: #ff0000dc;
  height: 200px;
  font-size: 28px;
  list-style: none;
  display: flex;
  /* display: {{(props) => props}} */
  flex-direction: column;
  justify-content: space-around;
  z-index: 9999999;
  position: relative;
  padding: 30px;
  border-radius: 10px;
  border: 2px solid black;
`;

const BurgerNavItem = styled.a`
  text-decoration: none;
  color: white;
  width: 100%;
  :hover {
    color: #726d6d;
    transition: 250ms ease-in-out;
  }
`;

const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState("flex");

  const onMenuClick = () => {
    setShowMenu(showMenu === "none" ? "flex" : "none");
  };

  return (
    <Hamburger id="hamburger-menu" onClick={onMenuClick}>
      <BurgerLine></BurgerLine>
      <BurgerLine></BurgerLine>
      <BurgerLine></BurgerLine>

      <BurgerNavContainer style={{display: showMenu}}>
        <BurgerNavItem>Home</BurgerNavItem>
        <BurgerNavItem>Ride Now</BurgerNavItem>
        <BurgerNavItem>About</BurgerNavItem>
        <BurgerNavItem>Apply</BurgerNavItem>
        <BurgerNavItem>Contact</BurgerNavItem>
      </BurgerNavContainer>
    </Hamburger>
  );
};

export default HamburgerMenu;
