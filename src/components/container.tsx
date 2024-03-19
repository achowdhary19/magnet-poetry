import React, { Fragment, useRef, useEffect } from "react";
import ScratchCard from "react-scratchcard-v4";
import { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v4";
import Scratch from "./Scratch";

interface Props {
  img1?: string;
  img2?: string;
  img3?: string;
  background?: string;
  overlay?: string;
  // popup: string;
}

const container = ({ img1, img2, img3, background, overlay }: Props) => {
  const ref = useRef<ScratchCard>(null);

  const onClickReset = () => {
    ref.current && ref.current.reset();
    console.log("reset");
  };

  const handleClick = () => {
    alert("Hello!");
  };

  const open = () => {
    window.open(
      "./src/popup1.html",
      "popUpWindow",
      "height=100,width=100,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes, target=_parent"
    );
  };

  return (
    <Fragment>
      {/*  1 row (default ) with 1 big centered container  */}
      <div className="fixed d-flex justify-content-center">
        {/* 1 column of containers */}
        <div className="d-flex flex-column justify-content-center main black">
          {/* first item, row of items spaced between  */}
          <div className="d-flex starsdiv justify-content-between">
            <img className="star" src="../src/assets/star1.png" alt="" />
            <a className="d-flex" onClick={open} target="_blank">
              eHELLO
            </a>
            <img className="star" src="../src/assets/star3.png" alt="" />
            <img className="star" src="../src/assets/star2.png" alt="" />
            <img className="star" src="../src/assets/star1.png" alt="" />
            <img className="star" src="../src/assets/star5.png" alt="" />
          </div>
          <div className="spacer"></div>
          {/* second item, row of items, aligned bottom relative to the cross axis */}
          <div className="d-flex align-items-end ">
            <img className="bird halo" src={img1} />
            <div className="box"></div>
          </div>
          <div className="spacer"></div>
          {/* third item, row of items */}
          <div className="d-flex img-fluid">
            <Scratch
              // onMouseDown={onClickReset}
              background={background}
              overlay={overlay}
            ></Scratch>
            <button onClick={onClickReset}>Reset</button>
          </div>
          <div className="spacer"></div>
          {/* fourth item */}
          <div className="d-flex poem-holder">
            <img src={img3} className="img-fluid halo"></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default container;
