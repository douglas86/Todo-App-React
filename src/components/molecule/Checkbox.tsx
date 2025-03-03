import { deleteIcon } from "../atoms/icons.tsx";
import { searchField } from "../atoms/elements.tsx";
import { roundButton } from "../atoms/buttons.tsx";

const Checkbox = ({ placeholder }: { placeholder: string }) => {
  console.log("placeholder", placeholder);

  return (
    <div className="flex w-[80%] items-center mx-auto border border-slate-500 rounded-full shadow-sm focus-within:border-slate-500 py-1 m-2 bg-white">
      <div className="flex-grow pl-2">{searchField(placeholder)}</div>
      <div className="flex-shrink-0 pr-2 flex items-center">
        {roundButton(10, deleteIcon, "red-200")}
      </div>
    </div>
  );
};

export default Checkbox;
