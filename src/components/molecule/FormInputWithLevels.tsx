import {
  UseFormTrigger,
  FieldError,
  UseFormRegisterReturn,
} from "react-hook-form";
import { errorMessage, formInput, formLabel } from "../atoms/formAtoms.tsx";
import { FormInputs } from "../../utils/types.tsx";

const FormInputWithLevels = ({
  nameAttribute,
  nameDisplay,
  reg,
  error,
  trig,
}: {
  nameAttribute: keyof FormInputs;
  nameDisplay: string;
  reg: UseFormRegisterReturn;
  error: FieldError | undefined;
  trig: UseFormTrigger<FormInputs>;
}) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      {formInput(nameAttribute, reg, trig)}
      {formLabel(nameAttribute, nameDisplay)}

      {errorMessage(error)}
    </div>
  );
};

export default FormInputWithLevels;
