import { ChangeEvent } from "react";

import LevelSelection from "./LevelSelection.tsx";
import CheckboxList from "./CheckboxList.tsx";
import { dateTime, inputWithLabel } from "../atoms/elements.tsx";
import { taskButton } from "../atoms/buttons.tsx";

import { useSession } from "../../hooks/useSession.tsx";
import { useLocal } from "../../hooks/useLocal.tsx";

const Form = () => {
  const { post, get } = useSession();
  const { postLocal } = useLocal();

  // save task name to session storage
  const taskName = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    post({ newTask: event.target.value });
  };

  // save tags to session storage
  const tags = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    post({ newTags: event.target.value });
  };

  // save date to session storage
  const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    post({ date: event.target.value });
  };

  // save time to session storage
  const handleTime = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    post({ time: event.target.value });
  };

  // save session storage to local storage
  // save data when form save button clicked
  const handleClick = () => {
    const session = get();

    if (session !== null) {
      try {
        const parsed = JSON.parse(session);

        const data = (Object.entries(parsed) as [string, string | object[]][])
          .filter(([key]) => key !== "newTask")
          .reduce(
            (obj, [key, value]) => {
              obj[key] = value;
              return obj;
            },
            {} as Record<string, string | Array<object>>,
          );

        postLocal(parsed.newTask, data);
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
        {dateTime("date", handleDate)}
        {dateTime("time", handleTime)}
      </div>

      <CheckboxList />

      {inputWithLabel("Add Tags", tags)}
      {taskButton("Save Task", "save", handleClick)}
    </form>
  );
};

export default Form;
