import { cancelButton, submitButton } from "../atoms/buttons.tsx";

const FormButton = () => {
  return (
    <div className={`flex justify-between items-center mx-5`}>
      {submitButton()}
      {cancelButton("/")}
    </div>
  );
};

export default FormButton;
