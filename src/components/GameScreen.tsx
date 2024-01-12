import React from "react";
import GameBoard from "./GameBoard";
import Controls from "./Controls";
import Rules from "./Rules";
import Timer from "./Timer";

interface GameScreenProps {
  onGameComplete: () => void;
  onReturnToMenu: () => void;
  rods: number;
  discs: number;
}

const GameScreen: React.FC<GameScreenProps> = ({
  onGameComplete,
  onReturnToMenu,
  rods,
  discs,
}) => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <Timer />
      <div className="flex flex-col items-center justify-center  p-4 ">
        <GameBoard
          onWin={onGameComplete}
          onGoToMenu={onReturnToMenu}
          initalRods={rods}
          initialDiscs={discs}
        />
        <Controls />
        <Rules />
      </div>
    </div>
  );
};

export default GameScreen;
