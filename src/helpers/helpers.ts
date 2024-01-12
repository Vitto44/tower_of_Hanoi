import { gameBoardState } from "./interfaces";

const isValidMove = (disk: number, targetRod: number[]) => {
  return (disk && targetRod.length === 0) || disk < targetRod[0];
};

const moveDisk = (
  rods: gameBoardState["rods"],
  selectRod: number,
  targetRod: number
) => {
  const selectedRod = rods[selectRod];
  const target = rods[targetRod];
  if (isValidMove(selectedRod[0], target)) {
    // push first elent in selected rod to target rod
    target.unshift(selectedRod.shift() as number);
  }
  return rods;
};

const createRods = (numberOfRods: number, numberOfDisks: number) => {
  const rods: number[][] = [];
  const firstRod: number[] = Array.from(
    { length: numberOfDisks },
    (_, i) => i + 1
  );
  rods.push(firstRod);
  for (let i = 1; i < numberOfRods; i++) {
    rods.push([]);
  }
  return rods;
};

const formatTimeFromMiliscedons = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${formattedSeconds}`;
};

const getColor = (disk: number) => {
  const colors = [
    "red",
    "cyan",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "blue",
  ];
  return colors[disk - 1];
};

export {
  createRods,
  isValidMove,
  moveDisk,
  formatTimeFromMiliscedons,
  getColor,
};
