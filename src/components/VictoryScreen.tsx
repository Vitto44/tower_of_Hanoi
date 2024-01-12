import React from "react";
import Button from "./Button";
import KeyShowcase from "./KeyShowcase";
import { useMoves, useTimer } from "../contexts/useContexts";
import { formatTimeFromMiliscedons } from "../helpers/helpers";

interface VictoryScreenProps {
  onRestart: () => void;
}

const VictoryScreen: React.FC<VictoryScreenProps> = ({ onRestart }) => {
  const { moves, disptachActualReset } = useMoves();
  const { timer, resetTimer } = useTimer();

  // Restarts the game by resetting the moves count, timer, and calling the onRestart function.

  const restart = () => {
    disptachActualReset();
    resetTimer();
    onRestart();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-3xl font-bold text-green-500 mb-4 animate-float">
        Congratulations!
      </h1>
      <p className="text-lg mb-2">You completed the tower of Hanoi!</p>
      <p className="text-md">
        Moves: <span className="font-bold">{moves}</span>
      </p>
      <p className="text-md">
        Time:{" "}
        <span className="font-bold">{formatTimeFromMiliscedons(timer)}</span>
      </p>
      <Button onAction={restart}>
        Go To Menu
        <KeyShowcase controlKey="Enter" description="" />
      </Button>
    </div>
  );
};

export default VictoryScreen;
