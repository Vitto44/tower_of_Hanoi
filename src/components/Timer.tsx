import { useEffect } from "react";
import { useMoves, useTimer } from "../contexts/useContexts";
import { formatTimeFromMiliscedons } from "../helpers/helpers";

const Timer: React.FC = () => {
  const { timer, resetTimer, incrementTimer } = useTimer();
  const { moves, disptachActualReset, isReset } = useMoves();

  useEffect(() => {
    const interval = setInterval(() => {
      incrementTimer();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [incrementTimer]);

  useEffect(() => {
    if (isReset) {
      disptachActualReset();
      resetTimer();
    }
  }, [isReset, disptachActualReset, resetTimer]);

  return (
    <div className="flex flex-col mb-10">
      <div>Timer: {formatTimeFromMiliscedons(timer)}</div>
      <div>Moves: {moves}</div>
    </div>
  );
};

export default Timer;
