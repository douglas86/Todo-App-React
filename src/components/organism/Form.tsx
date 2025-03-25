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

  // save session storage to local storage
  // save data when form save button clicked
  const handleClick = () => {
    const session = sessionStorage.getItem("session");

    if (session !== null) {
      try {
        const parsed = JSON.parse(session);

        if (parsed.newTask) {
          localStorage.setItem(
            JSON.stringify(parsed.newTask),
            JSON.stringify({
              priority: parsed.Priority,
              complexity: parsed.Complexity,
              date: parsed.date,
              time: parsed.time,
              checked: parsed.checked,
              tags: parsed.newTags,
            }),
          );
        }
      } catch (e) {
        console.error("Failed to parse sessionStorage JSON: ", e);
      }
    }
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
      {taskButton("Save Task", "save", handleClick)}
    </form>
  );
};

export default Form;
