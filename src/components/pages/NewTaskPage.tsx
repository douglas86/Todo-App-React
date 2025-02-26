import React, { useState } from "react";

import PageHeader from "../organism/PageHeader.tsx";
import Form from "../organism/Form";

const NewTaskPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const handleCheckItems: { title: string; checked: boolean }[] = [];

  console.log("handleCheckItems", handleCheckItems);

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setInputValue("");
      const task = {
        title: inputValue,
        checked: false,
      };
      handleCheckItems.push(task);
      localStorage.setItem("checklist", JSON.stringify(handleCheckItems));
    }
  };

  return (
    <div className="sm:w-120 md:w-150 lg:w-200">
      <PageHeader title="Add New Task" />
      <Form />

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
