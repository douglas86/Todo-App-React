import { UseFormRegisterReturn, FieldError } from "react-hook-form";
import { errorMessage, formInput, formLabel } from "../atoms/formAtoms.tsx";

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
      {formInput(nameAttribute, reg)}
      {formLabel(nameAttribute, nameDisplay)}

      {error !== undefined && errorMessage(error.message)}
    </div>
  );
};

export default FormInputWithLevels;
