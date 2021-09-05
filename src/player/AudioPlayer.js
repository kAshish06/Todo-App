import React, { useEffect, useRef, useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import PlayIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

const AudioPlayer = ({ src }) => {
  const [isPlay, setIsPlay] = useState(false);
  const audioElementRef = useRef(null);
  const handlePlayPause = (type) => {
    if (type === "play") {
      setIsPlay(true);
      audioElementRef.current.play();
    }
    if (type === "pause") {
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
        <IconButton>
          {isPlay ? (
            <PauseIcon
              onClick={() => {
                handlePlayPause("pause");
              }}
            />
          ) : (
            <PlayIcon
              onClick={() => {
                handlePlayPause("play");
              }}
            />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default AudioPlayer;
