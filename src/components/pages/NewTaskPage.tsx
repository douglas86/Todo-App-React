import React from "react";

import PageHeader from "../organism/PageHeader.tsx";
import Form from "../organism/Form";
import Checkbox from "../molecule/Checkbox.tsx";
import useAppContext from "../../hooks/useAppContext.tsx";

const NewTaskPage = () => {
  const { state, dispatch } = useAppContext();

  console.log("state", state.checkboxReducer);

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHECKBOX_INPUT", payload: e.target.value });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // only when enter is performed then save input data
    if (e.key === "Enter") {
      e.preventDefault();
      dispatch({
        type: "ADD_CHECKBOX_INPUT",
        payload: state.checkboxReducer.input,
      });
      dispatch({ type: "CLEAR_CHECKBOX_INPUT" });
    }
  };

  return (
    <div className="sm:w-120 md:w-150 lg:w-200">
      <PageHeader title="Add New Task" />
      <Form />

      {/*display items in an item array*/}
      {state.checkboxReducer.items.map((item, index) => (
        <Checkbox key={index} placeholder={`${item}`} />
      ))}

      {/*checkbox*/}
      <div className={"relative mt-12 mb-5"}>
        <input
          type={"text"}
          className={"w-full border-b rounded-full"}
          value={`${state.checkboxReducer.input}`}
          placeholder={"Add task - Hit enter once done"}
          onChange={handleSubmit}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

export default NewTaskPage;
