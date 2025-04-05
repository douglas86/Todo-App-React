import { FieldError } from "react-hook-form";
import { errorMessage, formInput, formLabel } from "../atoms/elements.tsx";

const FormInputWithLevels = ({
  nameAttribute,
  nameDisplay,
  reg,
  error,
}: {
  nameAttribute: string;
  nameDisplay: string;
  reg: object;
  error: FieldError | undefined;
}) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      {formInput(nameAttribute, reg)}
      {formLabel(nameAttribute, nameDisplay)}

      {errorMessage(error)}
    </div>
  );
};

export default FormInputWithLevels;
