import { cancelButton, submitButton } from "../atoms/buttons.tsx";

const FormButton = () => {
  return (
    <div className={`flex justify-between items-center`}>
      <div className="w-[50%] p-3">{submitButton()}</div>
      <div className="w-[50%] p-3">{cancelButton("/")}</div>
    </div>
  );
};

export default FormButton;
