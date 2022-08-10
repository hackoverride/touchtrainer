import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { words } from "../words/norwegian";

const Canvas = ({ draw, height, width }) => {
  const canvas = useRef();

  useEffect(() => {
    const context = canvas.current.getContext("2d");
    draw(context);
  });

  return (
    <canvas ref={canvas} height={height} width={width} id="background_canvas" />
  );
};

export default function Main() {
  const [update, setUpdate] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const fullHeight = window.innerHeight;
  const fullWidth = window.innerWidth;

  useEffect(() => {
    // we update the canvas positions and check for input match.
    if (position?.x === 0) {
      // first setup
      setPosition({ x: fullWidth / 2, y: 0 });
    } else {
      // first check if the y position is off screen then reset
      if (position?.y > fullHeight) {
        setPosition({ x: position.x, y: 0 });
      } else {
        setPosition({ x: position.x, y: position.y + 5 });
      }
    }

    /* Using setTimeout to trigger the animation */
    setTimeout(() => {
      setUpdate(update + 1);
    }, 25);
    // eslint-disable-next-line
  }, [update]);

  const draw = (context) => {
    context.clearRect(0, 0, fullWidth, fullHeight);
    context.fillStyle = "rgba(255,255,255,0.8)";
    context.font = "30px Arial";
    context.fillText(words[0], position.x, position.y);
  };

  return (
    <main>
      <Canvas
        height={window.innerHeight}
        width={window.innerWidth}
        draw={draw}
      ></Canvas>
    </main>
  );
}
