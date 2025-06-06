import { ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInputWithLevels from "../molecule/FormInputWithLevels.tsx";
import FormButton from "../molecule/FormButton.tsx";
import useLocalStorage from "../../hooks/useLocalStorage.tsx";
import { FormInputs } from "../../utils/types.tsx";
import RangeSlider from "../molecule/RangeSlider.tsx";

import DateTimeSelector from "../molecule/DateTimeSelector.tsx";
import CheckboxList from "./CheckboxList.tsx";

const Form = () => {
  const { postLocal } = useLocalStorage();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onChange",
    defaultValues: {
      priority: "1",
      complexity: "1",
      checkedCard: false,
      date: new Date(),
    },
  });

  const { keyExists } = useLocalStorage();

  const handlePriority = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("priority", event.target.value);
  };

  const handleComplexity = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("complexity", event.target.value);
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // store task names value to variable
    const name = data.taskName;

    // delete task name key value pairs from object
    delete data.taskName;

    // when the task name is not undefined, then store an object to local storage
    if (name !== undefined) {
      // store to local storage using taskName value as a key
      // and storing the rest of the data as its value
      postLocal(name, data);
      window.location.href = "/";
    }
  };

  // fhfgh

  return (
    <form
      className="w-[80%] m-auto p-5 justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/*Task Name input with the label*/}
      <FormInputWithLevels
        nameAttribute={`taskName`}
        nameDisplay={`Task Name`}
        reg={register("taskName", {
          required: "This field is required",
          validate: (value: string | undefined) =>
            typeof value === "string" && keyExists(value)
              ? "This name is already taken"
              : true,
        })}
        error={errors.taskName}
      />

      {/*Priority Slider*/}
      <RangeSlider
        title={"priority"}
        watch={watch("priority")}
        handleChange={handlePriority}
      />

      {/*Complexity Slider*/}
      <RangeSlider
        title={"complexity"}
        watch={watch("complexity")}
        handleChange={handleComplexity}
      />

      {/*date time selector*/}
      <DateTimeSelector watch={watch} setState={setValue} />

      {/*checkllst*/}
      <CheckboxList setValue={setValue} />

      {/*form buttons*/}
      <FormButton />
    </form>
  );
};

export default Form;
