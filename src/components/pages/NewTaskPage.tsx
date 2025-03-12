import React from "react";

import PageHeader from "../organism/PageHeader.tsx";
import Form from "../organism/Form";
import Checkbox from "../molecule/Checkbox.tsx";
import useAppContext from "../../hooks/useAppContext.tsx";

const NewTaskPage = () => {
  const { state, dispatch } = useAppContext();

  const findItemInArray = (find: string) =>
    state.checkboxReducer.items.indexOf(find) !== -1;

  console.log("state", state.checkboxReducer);
  console.log("find", findItemInArray(state.checkboxReducer.input));

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "CHECKBOX_INPUT", payload: e.target.value });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // only when enter is performed then save input data
    if (e.key === "Enter" && !findItemInArray(state.checkboxReducer.input)) {
      e.preventDefault();
      dispatch({
        type: "ADD_CHECKBOX_INPUT",
        payload: state.checkboxReducer.input,
      });
      dispatch({ type: "CLEAR_CHECKBOX_INPUT" });
    }
  };

  // TODO: add locic to display message if no items in array
  // TODO: isolate the context data for checkbox
  // TODO: as the data for form is completed then store state to localStorage
  // TODO: use custom hook for storing to local storage

  return (
    <div className="sm:w-120 md:w-150 lg:w-200">
      <PageHeader title="Add New Task" />
      <Form />

      {/*show a message if not items in an array*/}
      {/*show items in an array if items array not empty*/}
      {state.checkboxReducer.items &&
      state.checkboxReducer.items.length === 0 ? (
        <>
          <h1>Add Checklist for Subtasks</h1>
          <p className={`text-center uppercase font-bold mt-1`}>
            There are no tasks to display
          </p>
        </>
      ) : (
        state.checkboxReducer.items.map((item, index) => (
          <Checkbox key={index} placeholder={`${item}`} />
        ))
      )}

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
        {/*form validation to stop duplicate items in an array*/}
        {findItemInArray(state.checkboxReducer.input) && (
          <p className={`text-red-400 font-bold text-center p-2`}>
            Please add another item this has been added already!
          </p>
        )}
      </div>
    </div>
  );
};

export default NewTaskPage;
