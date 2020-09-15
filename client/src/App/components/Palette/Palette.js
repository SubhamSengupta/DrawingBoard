import React from "react";
import styled from "styled-components";

const Palette = () => {
  return <Section>Palette</Section>
}

const Section = styled.section`
  height: 4rem;
  border-radius: 0.4rem;
  box-shadow: 0 0 0.4rem 1rem rgba(0, 0, 0, 0.15);
  margin: 0.5rem 0;
  padding: 0 2rem;
  display: flex;
  align-items: center;
`;

export default Palette;
