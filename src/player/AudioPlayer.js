import React, { useEffect, useRef, useState } from "react";

import IconButton from "@mui/material/IconButton";
import PlayIcon from "../icons/PlayIcon";
import PauseIcon from "../icons/PauseIcon";

const AudioPlayer = ({ src }) => {
  const [isPlay, setIsPlay] = useState(false);
  const audioElementRef = useRef(null);
  const handlePlayPause = () => {
    if (!isPlay) {
      setIsPlay(true);
      audioElementRef.current.play();
    }
    if (isPlay) {
      setIsPlay(false);
      audioElementRef.current.pause();
    }
  };
  const handleAudioPlayEnd = () => {
    setIsPlay(false);
  };
  return (
    <div>
      <audio ref={audioElementRef} onEnded={handleAudioPlayEnd}>
        <source src={src} type="audio/ogg" />
      </audio>
      <div>
        <IconButton
          onClick={() => {
            handlePlayPause();
          }}
        >
          {isPlay ? <PauseIcon /> : <PlayIcon />}
        </IconButton>
      </div>
    </div>
  );
};

export default AudioPlayer;
