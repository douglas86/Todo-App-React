import { roundButton } from "../atoms/buttons.tsx";
import { MouseEventHandler } from "react";

const SelectLevel = ({ description }: { description: string }) => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    console.log("I was clicked", event.target.name);
  };

  return (
    <div>
      <label>Select {description} Level</label>
      <div className="flex justify-between items-center w-full p-3">
        {[...Array(10).keys()].map((n) => (
          <div key={n}>
            {roundButton(10, `${n + 1}`, handleClick, "blue-500")}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectLevel;
