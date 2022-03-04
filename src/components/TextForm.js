import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <div className="my-3 container">
      <p className="h3 mb-3 text-center">{props.heading}</p>
      <textarea
        className="form-control mb-3"
        id="myBox"
        rows="10"
        value={text}
        onChange={handleOnChange}
      ></textarea>
      <div className="my-btns">
        <button
          className="mx-2 btn btn-outline-success"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className="mx-2 btn btn-outline-success"
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
      </div>
      <div className="container text-center mt-4">
        <p className="fw-bold">Your Text Summary : <br /> <span className="text-success">{text.split(" ").length} Words</span> or <span className="text-success">{text.length} Characters</span></p>
      </div>
      <div className="preview">
        <p className="h4 text-success">Preview <span className="h6 text-secondary">({0.008 * text.split(" ").length} Minutes to read)</span></p>
        <p>{text}</p>
      </div>
    </div>
  );
}
