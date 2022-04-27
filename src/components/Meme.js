import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState(""); //error on first load no image loads due to being empty

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
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
      <img className="meme--image" src={memeImage} alt="Meme"></img>
    </main>
  );
}
