import { useContext } from "react";
import { TimerContext } from "./TimerContext";
import { MovesContext } from "./MovesContext";

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (context === undefined) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
};
export const useMoves = () => {
  const context = useContext(MovesContext);
  if (context === undefined) {
    throw new Error("useTimer must be used within a TimerProvider");
  }
  return context;
};
