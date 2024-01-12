import KeyShowcase from "./KeyShowcase";

const keys = [
  {
    key: "←",
    action: "Move Left",
  },
  {
    key: "→",
    action: "Move Right",
  },
  {
    key: "↑",
    action: "Select From",
  },
  {
    key: "↓",
    action: "Select To",
  },
  {
    key: "Space",
    action: "Make Move",
  },
  {
    key: "R",
    action: "Reset Game",
  },
  {
    key: "M",
    action: "Go To Menu",
  },
];

const Controls = () => {
  return (
    <div className="flex flex-col items-center max-w-3xl gap-3 m-5">
      <p className="text-2xl m-3 font-bold">Game Controls:</p>
      <div className="flex flex-row flex-wrap justify-center gap-5">
        {keys.map((key) => (
          <KeyShowcase
            key={key.key}
            controlKey={key.key}
            description={key.action}
          />
        ))}
      </div>
    </div>
  );
};

export default Controls;
