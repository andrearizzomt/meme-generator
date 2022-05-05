import React from "react";
import styled from "@emotion/styled";

//Header container
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  background: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);
  color: white;
  padding: 20px;
`;

//Troll Logo
const Logo = styled.img`
  max-height: 100%;
  margin-right: 6px;
`;

//App Title Name
const Title = styled.h2`
  /* rem calculation px divided by 16 
i.e. 20px / 16 = 1.25rem */
  font-size: 1.25rem;
  margin-right: auto;
`;

//App Project Name
const Project = styled.h4`
  font-size: 0.75rem;
  font-weight: 500;
`;

export default function Header() {
  return (
    <Container>
      <Logo src="/images/Troll Face.png" alt="Troll Face"></Logo>
      <Title>Meme Generator</Title>
      <Project>React Course - Project 3</Project>
    </Container>
  );
}
