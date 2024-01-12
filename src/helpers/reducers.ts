import { createRods, moveDisk } from "./helpers";
import { gameBoardState } from "./interfaces";

const gameBoardReducer = (
  state: gameBoardState,
  action: {
    type: string;
    payload: { rods: number; discs: number } | null;
  }
) => {
  switch (action.type) {
    case "ArrowLeft":
      return {
        ...state,
        hoveredRod:
          (state.hoveredRod + state.rods.length - 1) % state.rods.length,
      };
    case "ArrowRight":
      return {
        ...state,
        hoveredRod: (state.hoveredRod + 1) % state.rods.length,
      };
    case "ArrowUp":
      return { ...state, selectedRod: state.hoveredRod % state.rods.length };
    case "ArrowDown":
      return { ...state, targetRod: state.hoveredRod % state.rods.length };
    case " ":
      return {
        ...state,
        rods: moveDisk([...state.rods], state.selectedRod, state.targetRod),
      };
    case "r":
      return {
        ...state,
        rods: createRods(
          action.payload?.rods || state.rods.length,
          action.payload?.discs || state.rods[0].length
        ),
      };
    default:
      return state;
  }
};

export { gameBoardReducer };
