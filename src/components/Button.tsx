import React, { useEffect, useRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onAction: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onAction, ...props }) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    divRef.current?.focus();
  }, []);
  return (
    <div
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onAction();
        }
      }}
      ref={divRef}
      className="focus:outline-none"
      tabIndex={0}
    >
      <button
        className="bg-primary-main hover:bg-primary-dark font-bold py-2 px-4 rounded mt-5 flex flex-row items-center justify-center gap-2"
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
