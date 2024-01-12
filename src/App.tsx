import { useState } from "react";
import MenuScreen from "./components/MenuScreen";
import VictoryScreen from "./components/VictoryScreen";
import GameScreen from "./components/GameScreen";
import { TimerProvider } from "./contexts/TimerContext";
import { MovesProvider } from "./contexts/MovesContext";

const App: React.FC = () => {
  const [gameState, setGameState] = useState({
    started: false,
    completed: false,
    rods: 3,
    discs: 4,
  });

  // Function to start the game
  const startGame = () => {
    setGameState((prevState) => ({ ...prevState, started: true }));
  };

  // Function to complete the game
  const completeGame = () => {
    setGameState((prevState) => ({ ...prevState, completed: true }));
  };

  // Function to return to the menu
  const returnToMenu = () => {
    setGameState((prevState) => ({
      ...prevState,
      started: false,
      completed: false,
    }));
  };

  return (
    <MovesProvider>
      <TimerProvider>
        <div className="bg-background-dark flex flex-col items-center justify-center h-screen p-6 text-white">
          {/* Render the MenuScreen component if the game has not started and not completed */}
          {!gameState.started && !gameState.completed && (
            <MenuScreen
              onStartGame={startGame}
              rods={gameState.rods}
              discs={gameState.discs}
              setter={setGameState}
            />
          )}
          {/* Render the VictoryScreen component if the game has been completed */}
          {gameState.completed && <VictoryScreen onRestart={returnToMenu} />}
          {/* Render the GameScreen component if the game has started and not completed */}
          {gameState.started && !gameState.completed && (
            <GameScreen
              onReturnToMenu={returnToMenu}
              onGameComplete={completeGame}
              rods={gameState.rods}
              discs={gameState.discs}
            />
          )}
        </div>
      </TimerProvider>
    </MovesProvider>
  );
};

export default App;
