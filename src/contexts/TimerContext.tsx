import React, { createContext, useState } from "react";

interface TimerContextData {
  timer: number;
  resetTimer: () => void;
  incrementTimer: () => void;
}

export const TimerContext = createContext<TimerContextData | undefined>(
  undefined
);

export const TimerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [timer, setTimer] = useState(0);

  const incrementTimer = () => {
    setTimer((timer) => timer + 1);
  };

  const resetTimer = () => {
    setTimer(0);
  };

  return (
    <TimerContext.Provider
      value={{
        resetTimer,
        timer,
        incrementTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
