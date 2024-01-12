import React from "react";

interface KeyShowcaseProps {
  controlKey: string;
  description: string;
}

const KeyShowcase: React.FC<KeyShowcaseProps> = ({
  controlKey,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="border-2 p-2 border-white border-r-5 rounded text-xl">
        {controlKey}
      </p>
      <p> {description}</p>
    </div>
  );
};

export default KeyShowcase;
