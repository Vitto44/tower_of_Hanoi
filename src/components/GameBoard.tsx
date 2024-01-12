import React, { useEffect, useReducer } from "react";
import Disc from "./Disc";
import { createRods, isValidMove } from "../helpers/helpers";
import { gameBoardReducer } from "../helpers/reducers";
import GameBoardContainer from "./GameBoardContainer";
import { useMoves } from "../contexts/useContexts";

interface GameBoardProps {
  onWin: () => void;
  initalRods: number;
  initialDiscs: number;
  onGoToMenu: () => void;
}

const GameBoard: React.FC<GameBoardProps> = ({
  onWin,
  onGoToMenu,
  initalRods,
  initialDiscs,
}) => {
  // Use the gameBoardReducer to manage the state of the game board
  const [{ selectedRod, targetRod, hoveredRod, rods }, dispatch] = useReducer(
    gameBoardReducer,
    {
      rods: createRods(initalRods, initialDiscs),
      selectedRod: 0,
      targetRod: 1,
      hoveredRod: 0,
    }
  );

  // Use the useMoves custom hook to manage the moves and reset requests
  const { incrementMoves, dispatchResetRequest, badMove, handleBadMove } =
    useMoves();

  // Check if the game is won when the rods state changes
  useEffect(() => {
    if (rods[rods.length - 1].length === initialDiscs) {
      onWin();
    }
  }, [rods, onWin, initialDiscs]);

  // Handle keydown events
  const handleKeyDown = (key: string) => {
    if (key === "m") {
      dispatchResetRequest();
      onGoToMenu();
    } else {
      if (key === "r") {
        // Reset the game board
        dispatch({
          type: key,
          payload: { rods: initalRods, discs: initialDiscs },
        });
        dispatchResetRequest();
      } else {
        if (key === " ") {
          // Check if the move is valid and increment the moves counter
          if (isValidMove(rods[selectedRod][0], rods[targetRod])) {
            incrementMoves();
          } else {
            handleBadMove();
          }
        }
        // Dispatch the key action to the gameBoardReducer
        dispatch({
          type: key,
          payload: null,
        });
      }
    }
  };

  // Render the GameBoard component
  return (
    <GameBoardContainer handleKeyDown={handleKeyDown}>
      {rods.map((rod: number[], index: number) => (
        <div
          key={index}
          className={`${selectedRod === index && "bg-red-500"} ${
            targetRod === index && "bg-green-500"
          } ${hoveredRod === index && "shadow-rod-glow"}
          ${badMove && "animate-shake"}
          } w-1 mx-12 text-center`}
        >
          <p
            className={`w-14 font-bold animate-float ${
              selectedRod === index && "text-red-500"
            } ${targetRod === index && "text-green-500"}`}
          >
            {selectedRod === index && "↑"}
            {targetRod === index && "↓"}
          </p>
          {/* Rod container */}
          <div className="relative h-52">
            {/* Static rod element */}
            <div className="absolute bg-gray-200 h-full w-2 left-1/2 transform -translate-x-1/2 z-0" />
            {/* Disks */}
            <div className="flex flex-col justify-end h-full items-center">
              {rod.map((size: number, diskIndex: number) => (
                <Disc key={diskIndex} size={size} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </GameBoardContainer>
  );
};

export default GameBoard;
