import { FieldError } from "react-hook-form";
import { errorMessage, formInput } from "../atoms/elements.tsx";

const FormInputWithLevels = ({
  name,
  reg,
  error,
}: {
  name: string;
  reg: object;
  error: FieldError | undefined;
}) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      {formInput(name, reg)}
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Task Name
      </label>
      {errorMessage(error)}
    </div>
  );
};

export default FormInputWithLevels;
