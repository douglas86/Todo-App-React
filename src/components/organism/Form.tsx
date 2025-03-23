import { ChangeEvent } from "react";

import LevelSelection from "./LevelSelection.tsx";
import CheckboxList from "./CheckboxList.tsx";
import { dateTime, inputWithLabel } from "../atoms/elements.tsx";
import { taskButton } from "../atoms/buttons.tsx";

const Form = () => {
  // save task name to session storage
  const taskName = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newTask = { newTask: event.target.value };
    const existing = sessionStorage.getItem("session");
    const sessionTask = existing ? JSON.parse(existing) : {};

    const storingTask = { ...sessionTask, ...newTask };

    sessionStorage.setItem("session", JSON.stringify(storingTask));
  };

  // save tags to session storage
  const tags = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const newTags = { newTags: event.target.value };
    const existing = sessionStorage.getItem("session");
    const sessionTask = existing ? JSON.parse(existing) : {};

    const storingTask = { ...sessionTask, ...newTags };

    sessionStorage.setItem("session", JSON.stringify(storingTask));
  };

  return (
    <form>
      {inputWithLabel("Task Name", taskName)}

      <LevelSelection description={"Priority"} />
      <LevelSelection description={"Complexity"} />

      <div className={"flex justify-evenly mb-4"}>
        {dateTime("date")}
        {dateTime("time")}
      </div>

      <CheckboxList />

      {inputWithLabel("Add Tags", tags)}
      {taskButton("Save Task", "save")}
    </form>
  );
};

export default Form;
