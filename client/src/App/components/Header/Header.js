import React from "react";
import styled from "styled-components";

const Header = () => {
  return <H1>&#127912; Drawing Board</H1>
}

const H1 = styled.h1`
  font-size: 2rem;
  line-height: 3rem;
  margin: 0;
  background: linear-gradient(#555, #111);
  color: white;
  padding: 1rem 2rem;
  font-weight: normal;
`;

export default Header;
