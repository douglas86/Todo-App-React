import { inputWithLabel } from "../atoms/elements.tsx";

const Form = () => {
  return <form>{inputWithLabel("Task Name")}</form>;
};

export default Form;
