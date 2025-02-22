import { inputWithLabel } from "../atoms/elements.tsx";
import SelectLevel from "../molecule/SelectLevel.tsx";

const Form = () => {
  return (
    <form>
      {inputWithLabel("Task Name")}
      <SelectLevel description="Priority" />
      <SelectLevel description="Complexity" />
    </form>
  );
};

export default Form;
