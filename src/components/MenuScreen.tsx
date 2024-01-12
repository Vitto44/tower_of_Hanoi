import React, { useEffect, useRef } from "react";
import Controls from "./Controls";
import Rules from "./Rules";
import KeyShowcase from "./KeyShowcase";
import Button from "./Button";

interface MenuScreenProps {
  onStartGame: () => void;
  rods: number;
  discs: number;
  setter: React.Dispatch<
    React.SetStateAction<{
      started: boolean;
      completed: boolean;
      rods: number;
      discs: number;
    }>
  >;
}

// MenuScreen component
const MenuScreen: React.FC<MenuScreenProps> = ({
  onStartGame,
  rods,
  discs,
  setter,
}) => {
  const divRef = useRef<HTMLDivElement>(null);

  // Focus the div element when the component mounts
  useEffect(() => {
    divRef.current?.focus();
  }, []);

  // Handle keydown event
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onStartGame();
    } else if (e.key === "t") {
      // Toggle between 3, 4, 5 rods
      setter((prevState) => ({
        ...prevState,
        rods: rods === 5 ? 3 : rods + 1,
      }));
    } else if (e.key === "d") {
      // Toggle between 3, 4, 5 discs
      setter((prevState) => ({
        ...prevState,
        discs: discs === 5 ? 3 : discs + 1,
      }));
    }
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      ref={divRef}
      className="flex focus:outline-none flex-col items-center justify-center h-screen"
      tabIndex={0}
      autoFocus
    >
      <div className="flex flex-col items-center justify-center ">
        <img src="/logo.png" alt="Tower of Hanoi" className="w-20 h-24" />
        <h1 className="text-4xl font-bold mb-6">Tower of Hanoi</h1>
      </div>
      <h2 className="text-2xl font-bold mb-2">Options:</h2>
      <div className="flex flex-row items-center justify-center mb-4 gap-12">
        <div className="flex flex-col items-center justify-center">
          <KeyShowcase controlKey="T" description="Change number of rods" />
          <p className="font-bold text-2xl">{rods}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <KeyShowcase controlKey="D" description="Change number of discs" />
          <p className="font-bold text-2xl">{discs}</p>
        </div>
      </div>
      <Rules />
      <Controls />
      <Button onAction={onStartGame}>
        Start Game
        <KeyShowcase controlKey="Enter" description="" />
      </Button>
    </div>
  );
};

export default MenuScreen;
