import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

//Main container
const Main = styled.main`
  padding: 36px;
  text-align: center;
`;

//Form container
const Form = styled.form`
  display: grid;
  grid-template: 40px 40px / 1fr 1fr;
  gap: 15px;
`;

//Form inputs
const Input = styled.input`
  font-family: "Karla", sans-serif;
  border-radius: 5px;
  border: 1px solid #d5d4d8;
  text-indent: 5px;
`;

//Form button
const Button = styled.button`
  grid-column: 1 / -1;
  font-family: "Karla", sans-serif;
  border-radius: 5px;
  background: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);
  color: white;
  border: none;
  cursor: pointer;
`;

//Meme container
const MemeContainer = styled.div`
  position: relative;
`;

//Meme image
const MemeImage = styled.img`
  padding: 20px;
  height: 50vh;
`;

//Meme image Top Text
const TopText = styled.h2`
  top: 0;
  position: absolute;
  width: 80%;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  margin: 15px 0;
  padding: 25px 5px;
  font-family: impact, sans-serif;
  font-size: 2em;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
    -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
    2px 2px 5px #000;
`;

//Meme image Bottom Text
const BottomText = styled.h2`
  bottom: 0;
  position: absolute;
  width: 80%;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  margin: 15px 0;
  padding: 25px 5px;
  font-family: impact, sans-serif;
  font-size: 2em;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;
  text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
    -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
    2px 2px 5px #000;
`;

export default function Meme() {
  //generate meme text using state and previous state
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  //generate random meme image using state and previous state
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((resolve) => resolve.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <Main>
      <Form>
        <Input
          type="text"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <Input
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <Button onClick={getMemeImage} type="button">
          Get a new meme Image!
        </Button>
      </Form>
      <MemeContainer>
        <MemeImage src={meme.randomImage} alt="Meme"></MemeImage>
        <TopText>{meme.topText}</TopText>
        <BottomText>{meme.bottomText}</BottomText>
      </MemeContainer>
    </Main>
  );
}
