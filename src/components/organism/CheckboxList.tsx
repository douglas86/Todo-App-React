import React, { useState } from "react";

import CheckboxItem from "../molecule/CheckboxItem.tsx";

import { Checkbox } from "../../utils/interfaces.tsx";
import { ChecklistTypes } from "../../utils/types.tsx";

const CheckboxList = ({ setValue }: ChecklistTypes) => {
  const [input, setInput] = useState<string>("");
  const [checkboxes, setCheckboxes] = useState<Checkbox[]>([]);

  // remove checkbox by ID
  const removeCheckbox = (id: number) => {
    const filtering = checkboxes.filter((checkbox) => checkbox.id !== id);

    setCheckboxes(filtering); // update the checkbox state with deleted items
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

      const updatedCheckboxes = [...checkboxes, newCheckbox];
      setCheckboxes(updatedCheckboxes);
      handleSessionStorage(updatedCheckboxes);

      setInput("");
    }
  };

  const handleSessionStorage = (arr: Array<object> | object[]) => {
    // setting checkbox value for React hook forms
    const updatedCheckboxes = [...arr];
    setValue("checkbox", updatedCheckboxes);
  };

  return (
    <div className={`m-4`}>
      <label className={` text-lg font-bold text-green-500`}>
        Checklists for subtasks
      </label>

      {/*display items in the checkbox state*/}
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
        // when the checkbox state is empty
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

      {/*form validation when the item already exists*/}
      {findItemInArray(input) && (
        <p className={`text-red-400 font-bold text-center py-2 px-3`}>
          Please add another item this has been added already!
        </p>
      )}
    </div>
  );
};

export default CheckboxList;
