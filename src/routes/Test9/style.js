import { css, keyframes } from "react-emotion";

export const cssSpace = css({
  marginTop: 24,
  width: 800,
  height: 800,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "black",
  position: "relative",
});

export const cssSun = css({
  width: 80,
  height: 80,
  backgroundColor: "yellow",
  borderRadius: 40,
  position: "relative",
});

export const cssOrbit = (distance, planetNumber) =>
  css({
    width: distance,
    height: distance,
    position: "absolute",
    top: `-${(distance - 80) / 2}px`,
    left: `-${(distance - 80) / 2}px`,
    animation: `${rotate} ${planetNumber * 2}s infinite linear`,
  });

export const cssPlanet = () =>
  css({
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: getRandomColor(),
  });

const rotate = keyframes`
0% {
  transform: rotate(0);
}
100% {
  transform: rotate(1turn);
}
`;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
