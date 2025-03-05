import React, { useState } from "react";

import PageHeader from "../organism/PageHeader.tsx";
import Form from "../organism/Form";
// import { deleteIcon } from "../atoms/icons.tsx";
// import { roundButton } from "../atoms/buttons.tsx";
import Checkbox from "../molecule/Checkbox.tsx";
import useAppContext from "../../hooks/useAppContext.tsx";

interface MyObject {
  id: number;
  title: string;
  checked: boolean;
}

const NewTaskPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  // const handleCheckItems: { title: string; checked: boolean }[] = [];
  const [handleCheckboxInput, setHandleCheckboxInput] = useState<MyObject[]>(
    [],
  );

  const { state } = useAppContext();

  console.log("handleCheckboxInput", handleCheckboxInput);
  console.log("state", state);

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // only when enter is performed then save input data
    if (e.key === "Enter") {
      e.preventDefault();
      setHandleCheckboxInput([
        ...handleCheckboxInput,
        {
          id: handleCheckboxInput.length + 1,
          title: inputValue,
          checked: false,
        },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="sm:w-120 md:w-150 lg:w-200">
      <PageHeader title="Add New Task" />
      <Form />

      {handleCheckboxInput.map(({ id, title }) => (
        <Checkbox key={id} placeholder={`${title}`} />
      ))}

      {/*checkbox*/}
      <div className={"relative mt-12 mb-5"}>
        <input
          type={"text"}
          className={"w-full border-b rounded-full"}
          value={`${inputValue}`}
          placeholder={"Add task - Hit enter once done"}
          onChange={handleSubmit}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default NewTaskPage;
