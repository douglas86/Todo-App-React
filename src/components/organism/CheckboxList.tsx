import React, { useState } from "react";
import CheckboxItem from "../molecule/CheckboxItem.tsx";

interface Checkbox {
  id: number;
  label: string;
  checked: boolean;
}

const CheckboxList = () => {
  const [input, setInput] = useState<string>("");
  const [checkboxes, setCheckboxes] = useState<Checkbox[]>([]);

  // remove checkbox by ID
  const removeCheckbox = (id: number) => {
    setCheckboxes(checkboxes.filter((checkbox) => checkbox.id !== id));
  };

  // toggle checkbox checked state
  const toggleCheckbox = (id: number) => {
    setCheckboxes((prev) =>
      prev.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox,
      ),
    );
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const findItemInArray = (find: string) =>
    checkboxes.find((item) => item.label === find);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // only when enter is performed then save input data
    if (e.key === "Enter" && !findItemInArray(input)) {
      e.preventDefault();
      const newCheckbox: Checkbox = {
        id: Date.now(),
        label: input,
        checked: false,
      };
      setCheckboxes([...checkboxes, newCheckbox]);
      setInput("");
    }
  };

  return (
    <div>
      <h2>Dynamic Checkboxes</h2>
      <ul>
        {checkboxes.map((checkbox) => (
          <CheckboxItem
            key={checkbox.id}
            checkbox={checkbox}
            onToggle={() => toggleCheckbox(checkbox.id)}
            onDelete={() => removeCheckbox(checkbox.id)}
          />
        ))}
      </ul>

      <input
        type={"text"}
        className={"w-full border-b rounded-full"}
        value={`${input}`}
        placeholder={"Add task - Hit enter once done"}
        onChange={handleSubmit}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default CheckboxList;
