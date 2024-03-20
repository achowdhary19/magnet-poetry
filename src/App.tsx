import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Tab from "./components/Tab";
import Container from "./components/container";
import ScratchCard from "react-scratchcard-v4";
import { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v4";
import birds from "../src/assets/2birds.png";
import cows from "../src/assets/ppokokmyPanel 3.png";
import bunnies from "../src/assets/bunniesinsnow.png";
import background from "../src/assets/bunniesinsnow.png";
import overlay from "../src/assets/overlay.png";
import testing from "../src/assets/testing.JPG";
import "./App.css";

function App() {
  const onClick = () => {
    console.log("click");
  };

  // let birds = "../src/assets/2birds.png";
  // let cows = "../src/assets/ppokokmyPanel 3.png";
  // let bunnies = "../src/assets/bunniesinsnow.png";
  // let background = "../src/assets/bunniesinsnow.png";
  // let overlay = "../src/assets/overlay.png";

  return (
    <>
      <div>
        <Tab></Tab>
        <Container
          img1={birds}
          img2={bunnies}
          img3={cows}
          overlay={overlay}
          background={background}
        ></Container>
      </div>
    </>
  );
}
export default App;
