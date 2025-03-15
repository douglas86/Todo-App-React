import { roundButton } from "../atoms/buttons.tsx";
import { crossIcon, tickIcon } from "../atoms/icons.tsx";

interface CheckboxItemProps {
  checkbox: { id: number; label: string; checked: boolean };
  onToggle: () => void;
  onDelete: () => void;
}

const CheckboxItem = ({ checkbox, onToggle, onDelete }: CheckboxItemProps) => {
  const handleClick = () => onToggle();

  return (
    <li className={`flex p-2`}>
      {checkbox.checked
        ? roundButton(10, tickIcon, handleClick, "green-400")
        : roundButton(10, crossIcon, handleClick, "sky-400")}
      <label>{checkbox.label}</label>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default CheckboxItem;
