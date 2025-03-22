import { dateTime, inputWithLabel } from "../atoms/elements.tsx";
import LevelSelection from "./LevelSelection.tsx";
import CheckboxList from "./CheckboxList.tsx";
import { taskButton } from "../atoms/buttons.tsx";
import { ChangeEvent } from "react";

const Form = () => {
  const newTask = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log("event", event.target.value);
  };

  const newTags = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log("event", event.target.value);
  };

  return (
    <form>
      {inputWithLabel("Task Name", newTask)}

      <LevelSelection description={"Priority"} />
      <LevelSelection description={"Complexity"} />

      <div className={"flex justify-evenly mb-4"}>
        {dateTime("date")}
        {dateTime("time")}
      </div>

      <CheckboxList />

      {inputWithLabel("Add Tags", newTags)}
      {taskButton("Save Task", "save")}
    </form>
  );
};

export default Form;
