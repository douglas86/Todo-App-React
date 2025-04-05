// import { ChangeEvent, useState } from "react";
// import { useRedirect } from "react-admin";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInputWithLevels from "../molecule/FormInputWithLevels.tsx";
import FormButton from "../molecule/FormButton.tsx";
import useLocal from "../../hooks/useLocal.tsx";

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

  const { keyExists } = useLocal();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log("data", data);

  console.log("watch", watch("taskName"));
  console.log("key", keyExists(watch("taskName")));

  // fhfgh

  return (
    <form className="w-full m-3 p-5" onSubmit={handleSubmit(onSubmit)}>
      <FormInputWithLevels
        nameAttribute={`taskname`}
        nameDisplay={`Task Name`}
        reg={register("taskName", {
          required: "This field is required",
          validate: (value) => !keyExists(value) || "This task alrady exists",
        })}
        error={errors.taskName}
      />

      <FormButton />
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
