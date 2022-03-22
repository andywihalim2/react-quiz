import { useState, useCallback } from "react";
import { cssVideo, cssContainer } from "./style";

const Player = () => {
  const [videoRef, setVideoRef] = useState({});

  const handlePlay = () => {
    if(videoRef.paused) videoRef.play();
    else videoRef.pause();
  };

  const handleMute = () => {
    if(!videoRef.muted) videoRef.muted = true;
    else videoRef.muted = false;
  };

  const callbackRef = useCallback(newRef => {
    if(newRef) setVideoRef(newRef);
  }, []);

  return(
    <>
      <div className={cssContainer}>
        <video
          preload="metadata"
          ref={callbackRef}
          className={cssVideo}
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        />
        
      </div>
      <button type="button" onClick={handlePlay}>Play/Pause</button>
      <button type="button" onClick={handleMute}>Mute/Unmute</button>
      <input type="range"/>
      <span>{videoRef.currentTime}/{videoRef.duration}</span>
    </>
  )
}

export default Player;
