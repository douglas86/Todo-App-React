import { ChangeEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInputWithLevels from "../molecule/FormInputWithLevels.tsx";
import FormButton from "../molecule/FormButton.tsx";
import useLocal from "../../hooks/useLocal.tsx";
import { FormInputs } from "../../utils/types.tsx";
import RangeSlider from "../molecule/RangeSlider.tsx";

const Form = () => {
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
    },
  });

  const { keyExists } = useLocal();

  const handlePriority = (event: ChangeEvent<HTMLInputElement>) => {
    setValue("priority", event.target.value);
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("data", data);
  };

  console.log("watch", watch());

  // fhfgh

  // TODO: Range slider in this component
  // TODO: break the range slider up to its own component

  return (
    <form className="w-full m-3 p-5" onSubmit={handleSubmit(onSubmit)}>
      {/*Task Name input with label*/}
      <FormInputWithLevels
        nameAttribute={`taskName`}
        nameDisplay={`Task Name`}
        reg={register("taskName", {
          required: "This field is required",
          validate: (value) =>
            keyExists(value) ? "This name is already taken" : true,
        })}
        error={errors.taskName}
      />

      {/*Range Slider*/}
      <RangeSlider
        title={"priority"}
        watch={watch("priority")}
        handleChange={handlePriority}
      />
      {/*<div className={`w-full my-6`}>*/}
      {/*  /!*label for range slider*!/*/}
      {/*  <label*/}
      {/*    htmlFor="volume"*/}
      {/*    className={`block text-lg font-medium text-gray-700 mb-2`}*/}
      {/*  >*/}
      {/*    Volume*/}
      {/*  </label>*/}

      {/*  <label className={`block text-sm font-medium text-gray-700 mb-2`}>*/}
      {/*    Value: {watch("priority") ?? "1"}*/}
      {/*  </label>*/}

      {/*  /!*slider*!/*/}
      {/*  <input*/}
      {/*    id="volume"*/}
      {/*    type="range"*/}
      {/*    min="1"*/}
      {/*    max="10"*/}
      {/*    value={watch("priority") ?? "1"}*/}
      {/*    className={`w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600`}*/}
      {/*    onChange={(event) => setValue("priority", event.target.value)}*/}
      {/*  />*/}

      {/*  /!*showing min and max value*!/*/}
      {/*  <div className={`flex justify-between text-lg text-gray-600 mb-1`}>*/}
      {/*    <span>1 mini</span>*/}
      {/*    <span>10 maxi</span>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*form buttons*/}
      <FormButton />
    </form>
  );
};

export default Form;
