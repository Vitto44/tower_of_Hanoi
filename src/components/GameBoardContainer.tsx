import { useEffect, useRef } from "react";

interface GameBoardContainerProps {
  children: React.ReactNode;
  handleKeyDown: (key: string) => void;
}

const GameBoardContainer: React.FC<GameBoardContainerProps> = ({
  children,
  handleKeyDown,
}) => {
  const gameBoardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus the element if it's rendered
    if (gameBoardRef.current) {
      gameBoardRef.current.focus();
    }
  }, []);

  return (
    <div
      id="game-board-container"
      tabIndex={0}
      ref={gameBoardRef}
      onKeyDown={(e) => handleKeyDown(e.key)}
      className="flex justify-center gap-24 focus:outline-none items-end"
    >
      {children}
    </div>
  );
};

export default GameBoardContainer;
