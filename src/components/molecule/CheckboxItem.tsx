import { roundButton } from "../atoms/buttons.tsx";
import { crossIcon } from "../atoms/icons/iconsGi.tsx";
import { deleteIcon } from "../atoms/icons/iconsMd.tsx";
import { tickIcon } from "../atoms/icons/iconsTi.tsx";

import { CheckboxItemsInterface } from "../../utils/interfaces.tsx";

const CheckboxItem = ({
  checkbox,
  onToggle,
  onDelete,
}: CheckboxItemsInterface) => {
  const handleClick = () => onToggle();

  return (
    <li
      className={`flex w-[100%] items-center mx-auto border border-slate-500 rounded-full shadow-sm focus-within:border-slate-500 py-1 m-2 bg-white`}
    >
      <div className="flex justify-center w-[20%] p-1">
        {checkbox.checked
          ? roundButton(8, tickIcon, handleClick, "green-400")
          : roundButton(8, crossIcon, handleClick, "sky-400")}
      </div>

      <label className="w-[60%] capitalize">{checkbox.label}</label>
      <div className="flex justify-center w-[20%]">
        {roundButton(8, deleteIcon(onDelete), onDelete, "red-200")}
      </div>
    </li>
  );
};

export default CheckboxItem;
