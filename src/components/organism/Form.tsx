import { useForm, SubmitHandler } from "react-hook-form";
import FormInputWithLevels from "../molecule/FormInputWithLevels.tsx";
import FormButton from "../molecule/FormButton.tsx";
import useLocal from "../../hooks/useLocal.tsx";
import { FormInputs } from "../../utils/types.tsx";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    mode: "onChange",
  });

  const { keyExists } = useLocal();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("data", data);
  };

  console.log("watch", watch());

  // fhfgh

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

      {/*form buttons*/}
      <FormButton />
    </form>
  );
};

export default Form;
