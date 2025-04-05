// import { ChangeEvent, useState } from "react";
// import { useRedirect } from "react-admin";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInputWithLevels from "../molecule/FormInputWithLevels.tsx";

// import LevelSelection from "./LevelSelection.tsx";
// import CheckboxList from "./CheckboxList.tsx";
// import { dateTime, errorMessage, inputWithLabel } from "../atoms/elements.tsx";
// import { taskButton } from "../atoms/buttons.tsx";
//
// import useSession from "../../hooks/useSession.tsx";
// import useLocal from "../../hooks/useLocal.tsx";
// import { NewTaskError } from "../../utils/types.tsx";

type Inputs = {
  taskName: string;
  exampleRequired: string;
};

const Form = () => {
  // const [error, setError] = useState<NewTaskError>({ TaskError: "" });
  // const redirect = useRedirect();
  // const { post, get } = useSession();
  // const { postLocal, keyExists } = useLocal();

  // TODO: add form validation
  // TODO: form validation can be done with react hook forms

  // form validation: Task name
  // TODO: input tag must not be blank
  // TODO: make sure that the title has not been used

  // form validation: Priority and Complexity
  // TODO: default levels for priority and complexity to be registered on page start

  // form validation: date and time
  // TODO: setup default for current date and time
  // TODO: can only create date and time in future, past must be blocked

  // form validation: checklists for subtasks
  // TODO: there must be at least one task
  // TODO: all tasks must be unique

  // form validation: save task button
  // TODO: save task button is disabled when there are errors to be fixed

  // save task name to session storage
  // const taskName = (event: ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   const key = "TaskError";
  //
  //   // check if the name has already been used
  //   if (keyExists(event.target.value.toLowerCase())) {
  //     // when name is already taken
  //     setError({ [key]: "This value already exists!" });
  //   } else {
  //     // when name is not taken
  //     setError({ [key]: " " });
  //     post({ task: event.target.value, checkedCard: false });
  //   }
  // };

  // save tags to session storage
  // const tags = (event: ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   post({ tags: event.target.value });
  // };

  // save date to session storage
  // const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   post({ date: event.target.value });
  // };

  // save time to session storage
  // const handleTime = (event: ChangeEvent<HTMLInputElement>) => {
  //   event.preventDefault();
  //   post({ time: event.target.value });
  // };

  // save session storage to local storage
  // save data when form save button clicked
  // const handleSubmit = () => {
  //   const session = get();
  //
  //   if (session !== null) {
  //     try {
  //       const parsed = JSON.parse(session);
  //
  //       const data = (Object.entries(parsed) as [string, string | object[]][])
  //         .filter(([key]) => key !== "task")
  //         .reduce(
  //           (obj, [key, value]) => {
  //             obj[key] = value;
  //             return obj;
  //           },
  //           {} as Record<string, string | Array<object>>,
  //         );
  //
  //       postLocal(parsed.task, data);
  //       redirect("/");
  //     } catch (e) {
  //       console.error("Failed to parse sessionStorage JSON: ", e);
  //     }
  //   }
  // };

  // set default values only when task name has been entered
  // post({ Priority: 1, Complexity: 1 });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log("data", data);

  console.log("watch", watch("taskName"));

  return (
    <form className="max-w-md mx-auto m-5" onSubmit={handleSubmit(onSubmit)}>
      <FormInputWithLevels
        name={`taskname`}
        reg={register("taskName", { required: true })}
        error={errors.taskName}
      />

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>

      <a href="/">
        <button
          type="button"
          className="font-bold text-red-800 bg-yellow-400 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Cancel
        </button>
      </a>
    </form>
  );

  // return (
  //   <form onSubmit={handleSubmit}>
  //     {inputWithLabel("Task Name", taskName)}
  //
  //     {errorMessage(error.TaskError)}
  //
  //     <LevelSelection description={"Priority"} />
  //     <LevelSelection description={"Complexity"} />
  //
  //     <div className={"flex justify-evenly mb-4"}>
  //       {dateTime("date", handleDate)}
  //       {dateTime("time", handleTime)}
  //     </div>
  //
  //     <CheckboxList />
  //
  //     {inputWithLabel("Add Tags", tags)}
  //     {taskButton(
  //       "Save Task",
  //       "save",
  //       error.TaskError !== "" && Object.keys(error).length === 1,
  //     )}
  //   </form>
  // );
};

export default Form;
