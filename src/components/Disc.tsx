import React from "react";
import { getColor } from "../helpers/helpers";

interface DiscProps {
  size: number;
}

const Disc: React.FC<DiscProps> = ({ size }) => {
  if (size === 0) return null;

  return (
    <div
      className={` h-7 mt-1 z-10`}
      style={{
        width: `${((1500 + size * 5) * size) / 2}%`,
        backgroundColor: getColor(size),
      }}
    />
  );
};

export default Disc;
