import { cssVideo } from "./style";

const Player = () => {
  return(
    <div>
      <video
        className={cssVideo}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
      <button type="button">Play/Pause</button>
      <button type="button">Mute/Unmute</button>
      <input type="range"/>
      <span>00:00/00:00</span>
    </div>
  )
}

export default Player;
