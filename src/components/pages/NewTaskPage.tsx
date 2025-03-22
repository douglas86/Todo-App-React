import PageHeader from "../organism/PageHeader.tsx";
// import Form from "../organism/Form";
import CheckboxList from "../organism/CheckboxList.tsx";
import LevelSelection from "../organism/LevelSelection.tsx";
import { dateTime, inputWithLabel } from "../atoms/elements.tsx";
import { taskButton } from "../atoms/buttons.tsx";
import { useEffect } from "react";

const NewTaskPage = () => {
  const session = localStorage.getItem("session");

  useEffect(() => {
    sessionStorage.setItem("session", JSON.stringify({}));
  }, [session]);

  return (
    <div className="sm:w-120 md:w-150 lg:w-200">
      <PageHeader title="Add New Task" />

      {inputWithLabel("Task Name")}

      <LevelSelection description={"Priority"} />
      <LevelSelection description={"Complexity"} />

      <div className={"flex justify-evenly mb-4"}>
        {dateTime("date")}
        {dateTime("time")}
      </div>

      {/*<Form />*/}

      <CheckboxList />

      {inputWithLabel("Add Tags")}
      {taskButton("Save Task", "save")}
    </div>
  );
};

export default NewTaskPage;
