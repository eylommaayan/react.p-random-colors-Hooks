import React from "react";
import Title from "../../components/Title";
export default function RandomizeColor() {
  function handleClick(event) {
    // console.log("click");
    console.log(event.target);
  }

  const handleSecClick = (e) => {
    // console.log(e.target);
    console.log(getRandomColor());
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className="container m-auto text-center">
      <Title text={"שינוי צבעים רנדומלי"} classes={"mb-4"} />
      <button
        className="btn btn-danger"
        onClick={(event) => handleClick(event)}
      >
    לחץ עלי
      </button>
      <button className="btn btn-success" onClick={handleSecClick}>
    לחץ עלי
      </button>
      <button className="btn btn-primary" onClick={handleSecClick}>
    לחץ עלי
      </button>
      <button className="btn btn-warning" onClick={handleSecClick}>
    לחץ עלי
      </button>
    </div>
  );
}
