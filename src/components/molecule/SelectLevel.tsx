import { roundButton } from "../atoms/buttons.tsx";

const SelectLevel = ({ description }: { description: string }) => {
  return (
    <div>
      <label>Select {description} Level</label>
      <div className="flex justify-between items-center w-full p-3">
        {[...Array(10).keys()].map((n) => (
          <div key={n}>{roundButton(10, `${n + 1}`, "blue-500")}</div>
        ))}
      </div>
    </div>
  );
};

export default SelectLevel;
