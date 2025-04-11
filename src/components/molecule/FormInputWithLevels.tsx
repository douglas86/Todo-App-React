import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { errorMessage, formInput, formLabel } from "../atoms/formAtoms.tsx";
// import { FormInputs } from "../../utils/types.tsx";

const FormInputWithLevels = ({
  nameAttribute,
  nameDisplay,
  reg,
  error,
}: {
  nameAttribute: string;
  nameDisplay: string;
  reg: UseFormRegisterReturn;
  error?: FieldError | undefined;
}) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      {/*<label*/}
      {/*  htmlFor={nameAttribute}*/}
      {/*  className={`peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6`}*/}
      {/*>*/}
      {/*  {nameDisplay}*/}
      {/*</label>*/}
      {/*<input*/}
      {/*  type="text"*/}
      {/*  id={nameAttribute}*/}
      {/*  placeholder=" "*/}
      {/*  {...reg}*/}
      {/*  className={`block py-2.5 px-0 w-full text-lg text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}*/}
      {/*/>*/}

      {formInput(nameAttribute, reg)}
      {formLabel(nameAttribute, nameDisplay)}

      {error !== undefined && errorMessage(error.message)}

      {/*{error !== undefined &&*/}
      {/*  Object.entries(error).map(([key, value]) => (*/}
      {/*    <div key={key}>{key === nameAttribute && errorMessage(value)}</div>*/}
      {/*  ))}*/}

      {/*{errorMessage(error)}*/}
    </div>
  );
};

export default FormInputWithLevels;
