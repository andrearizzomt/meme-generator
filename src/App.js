import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import { Global, css } from "@emotion/react";

//Global Resets and Font
const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Karla", sans-serif;
  }
`;

export default function App() {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Header />
      <Meme />
    </>
  );
}
