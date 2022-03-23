import { useState, useCallback } from "react";
import { cssVideo, cssContainer } from "./style";

const convertDuration = duration => { // duration in seconds
  const seconds = Math.floor(duration);

  if(seconds < 60) return `0:${seconds > 10 ? seconds : `0${seconds}`}`;
  return `${Math.floor(seconds/60)}:${seconds%60}`;
};

const Player = () => {
  const [videoRef, setVideoRef] = useState({});
  const [currTime, setCurrTime] = useState(0);

  const handlePlay = () => {
    if(videoRef.paused) videoRef.play();
    else videoRef.pause();
  };

  const handleMute = () => {
    if(!videoRef.muted) videoRef.muted = true;
    else videoRef.muted = false;
  };

  const handleRange = (e) => {
    videoRef.currentTime = e.target.value;
  };

  const callbackRef = useCallback(newRef => {
    if(newRef) {
      newRef.onloadedmetadata = function() {
        setVideoRef(newRef);
      };
      newRef.ontimeupdate = function(e) {
        setCurrTime(e.target.currentTime);
      };
    }
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
      <input type="range" min={0} max={videoRef.duration || 0} value={currTime} onChange={handleRange} />
      <span>{convertDuration(currTime)}/{convertDuration(videoRef.duration)}</span>
    </>
  )
}

export default Player;
