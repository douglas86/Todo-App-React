import { useState } from "react";
import { roundButton } from "../atoms/buttons.tsx";

const LevelSelection = ({ description }: { description: string }) => {
  const [number, setNumber] = useState(1);

  const handleClick = (num: number) => {
    setNumber(num);
  };

  return (
    <div className={"mt-4"}>
      <label>Select {description} Level</label>
      <div className={"flex justify-between items-center w-full p-3 mb-4"}>
        {[...Array(10).keys()].map((n) => (
          <div key={n}>
            {roundButton(
              10,
              n + 1,
              () => handleClick(n + 1),
              n + 1 === number ? "blue-500" : "green-500",
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LevelSelection;
