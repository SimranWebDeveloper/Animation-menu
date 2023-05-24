import React from "react";
import styled, { css } from "styled-components";
import "../Menu/style.css";

// const MyMenu = styled.button`
//   background-color: blue;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   transition: 3s;

//   &:hover {
//     background-color: red;
//     color: white;
//   }
// `;



const Menu = ({isOpen}) => {
  return (
      <div className={ isOpen ? 'hide-menu' : 'menu '}></div>
  );
};

export default Menu;
