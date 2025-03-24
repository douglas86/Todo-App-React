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
    const filtering = checkboxes.filter((checkbox) => checkbox.id !== id);

    setCheckboxes(filtering); // update checkbox state with deleted items
    handleSessionStorage(filtering); // update checkbox in session storage with deleted items
  };

  // toggle checkbox checked state
  const toggleCheckbox = (id: number) => {
    // find id and update to true or false depending on toggle
    const updated = checkboxes.map((checkbox: Checkbox) =>
      checkbox.id === id
        ? { ...checkbox, checked: !checkbox.checked }
        : checkbox,
    );

    setCheckboxes(updated); // update checkbox array state
    handleSessionStorage(updated); // update checkbox in session storage
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

      handleSessionStorage([...checkboxes, newCheckbox]);

      setInput("");
    }
  };

  const handleSessionStorage = (arr: Array<object> | object) => {
    const checked = { checked: arr };
    const existing = sessionStorage.getItem("session");
    const sessionTask = existing ? JSON.parse(existing) : {};

    const storingLevel = { ...sessionTask, ...checked };

    sessionStorage.setItem("session", JSON.stringify(storingLevel));
  };

  return (
    <div>
      <h2>Add Checklist for subtasks</h2>
      {checkboxes.length > 0 ? (
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
      ) : (
        <p className={`capitalize text-center text-red-400 font-bold p-3`}>
          There are no items to display
        </p>
      )}

      {/*add new items to a checkbox list*/}
      <input
        type={"text"}
        className={"w-full border-b rounded-full"}
        value={`${input}`}
        placeholder={"Add task - Hit enter once done"}
        onChange={handleSubmit}
        onKeyDown={handleKeyDown}
      />

      {/*form validation when item already exists*/}
      {findItemInArray(input) && (
        <p className={`text-red-400 font-bold text-center py-2 px-3`}>
          Please add another item this has been added already!
        </p>
      )}
    </div>
  );
};

export default CheckboxList;
