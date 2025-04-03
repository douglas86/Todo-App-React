import { roundButton } from "../atoms/buttons.tsx";
import { crossIcon } from "../atoms/iconsGi.tsx";
import { deleteIcon } from "../atoms/iconsMd.tsx";
import { tickIcon } from "../atoms/iconsTi.tsx";

interface CheckboxItemProps {
  checkbox: { id: number; label: string; checked: boolean };
  onToggle: () => void;
  onDelete: () => void;
}

const CheckboxItem = ({ checkbox, onToggle, onDelete }: CheckboxItemProps) => {
  const handleClick = () => onToggle();

  return (
    <li
      className={`flex w-[80%] items-center mx-auto border border-slate-500 rounded-full shadow-sm focus-within:border-slate-500 py-1 m-2 bg-white`}
    >
      <div className="flex justify-center w-[10%] p-1">
        {checkbox.checked
          ? roundButton(8, tickIcon, handleClick, "green-400")
          : roundButton(8, crossIcon, handleClick, "sky-400")}
      </div>

      <label className="w-[80%] capitalize">{checkbox.label}</label>
      <div className="flex justify-center w-[10%]">
        {roundButton(8, deleteIcon, onDelete, "red-400")}
      </div>
    </li>
  );
};

export default CheckboxItem;
