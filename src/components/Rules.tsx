const Rules: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-3 ">
      <h1 className="text-2xl font-bold">Rules:</h1>
      <div className="text-md">
        <ul className="list-disc list-inside max-w-2xl ">
          <li>Objective is to move all the discs to the most right rod.</li>
          <li>Only one disk can be moved at a time.</li>
          <li>
            Only the top disc of one rod can be moved to the top of another rod
            or an empty rod.
          </li>
          <li>Larger discs cannot be stacked over smaller ones.</li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
