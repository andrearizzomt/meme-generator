import React from "react";
import memesData from "../memesData";

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState(
  //   "https://i.imgflip.com/1bij.jpg"
  // );
  //no image load due to initialising state with an empty string thus no image loads for the first time due to being empty

  //generate random meme using state and previous state
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top Text" />
        <input className="form--input" type="text" placeholder="Bottom Text" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme Image!
        </button>
      </div>
      <img className="meme--image" src={meme.randomImage} alt="Meme"></img>
    </main>
  );
}