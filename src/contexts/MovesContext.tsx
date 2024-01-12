import React, { createContext, useEffect, useState } from "react";

// Define the shape of your context data
interface MovesContextData {
  moves: number;
  incrementMoves: () => void;
  dispatchResetRequest: () => void;
  isReset: boolean;
  disptachActualReset: () => void;
  handleBadMove: () => void;
  resetBadMove: () => void;
  badMove: boolean;
}

// Create the context
export const MovesContext = createContext<MovesContextData | undefined>(
  undefined
);

// Provider component
export const MovesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [moves, setMoves] = useState(0);
  const [isReset, setIsReset] = useState(false);
  const [badMove, setBadMove] = useState(false);

  useEffect(() => {
    if (badMove) {
      setTimeout(() => {
        setBadMove(false);
      }, 250);
    }
  }, [badMove]);

  const dispatchResetRequest = () => {
    setIsReset(true);
  };

  const handleBadMove = () => {
    setBadMove(true);
  };

  const resetBadMove = () => {
    setBadMove(false);
  };

  const disptachActualReset = () => {
    setMoves(0);
    setIsReset(false);
  };

  const incrementMoves = () => {
    setMoves(moves + 1);
  };

  return (
    <MovesContext.Provider
      value={{
        handleBadMove,
        badMove,
        resetBadMove,
        incrementMoves,
        moves,
        dispatchResetRequest,
        disptachActualReset,
        isReset,
      }}
    >
      {children}
    </MovesContext.Provider>
  );
};
