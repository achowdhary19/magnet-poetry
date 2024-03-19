import React, { useRef, useState, useEffect } from "react";
import ScratchCard from "react-scratchcard-v4";
import { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v4";
import itch from "../assets/itch.wav";

interface Props {
  background: string;
  overlay: string;
  onMouseDown?: () => void;
}

const Scratch = ({ background, overlay }: Props) => {
  const ref = useRef<ScratchCard>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value == 1) {
      startAudio;
    }
  }, [value]);

  const onClickReset = () => {
    ref.current && ref.current.reset();
  };

  let noise = new Audio(itch);

  const startAudio = () => {
    noise.play();
  };

  const stopAudio = () => {
    noise.pause();
  };

  return (
    <>
      {/* div  className="rounded img-fluid" */}

      <div
        className="rounded img-fluid"
        onMouseDown={startAudio}
        // onMouseDown={() => setValue(1)}
        onMouseUp={stopAudio}
        // onMouseUp={() => setValue(0)}
      >
        <ScratchCard
          width={550}
          height={73}
          image={overlay}
          finishPercent={98}
          customBrush={CUSTOM_BRUSH_PRESET}
          onComplete={() => console.log("complete")}
        >
          <div className="d-flex">
            <img className="leftRound" src={background} alt="" />
            <img className="rightRound" src={background} alt="" />
          </div>
        </ScratchCard>
      </div>
    </>
  );
};

export default Scratch;
