import { cssVideo } from "./style";
import { useState, useRef } from 'react'

const Player = () => {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0);
  const [seekValue, setSeekValue] = useState(0);

  const onTogglePlayPause = () => {
    if (videoRef.current.paused) videoRef.current.play()
    else videoRef.current.pause()
    setIsPlaying(!isPlaying)
  }

  const onToggleMuteUnmute = () => {
    if (videoRef.current.muted) videoRef.current.muted = false
    else videoRef.current.muted = true
    setIsMuted(!isMuted)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
    setDuration(videoRef.current.duration);
    setSeekValue(videoRef.current.currentTime);
  };

  const onSeek = (e) => {
    const newTime = e.target.value;
    videoRef.current.currentTime = newTime;
    setSeekValue(newTime);
  };

  const onFormatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <video
        ref={videoRef}
        className={cssVideo}
        onTimeUpdate={handleTimeUpdate}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      <button type="button" onClick={onTogglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      <button type="button" onClick={onToggleMuteUnmute}>{isMuted ? 'Unmute' : 'Mute'}</button>
      <input type="range" value={seekValue} min="0" max={duration} step="0.01" onChange={onSeek} />
      <span> {onFormatTime(currentTime)} / {onFormatTime(duration)}</span>
    </div>
  )
}

export default Player;
