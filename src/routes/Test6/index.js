import Player from "./Player";

const Test6 = () => {
  return(
    <div>
      <ul>
        <li>Make your own video player GUI</li>
        <li>Show <b>play/pause</b> in the button based on current playing state and able to toggle with it</li>
        <li>Sync current playing time with the range input, and to seek with it it</li>
        <li>display <code>current time / total time</code></li>
        <li>Show <b>mute/unmute</b> in the based on current mute state and able to toggle with it</li>
        <li>Keep the video ratio always 4:3 in any screen size</li>
      </ul>
      <Player />
    </div>
  )
}

export default Test6;
