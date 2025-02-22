import { dateTime, inputWithLabel } from "../atoms/elements.tsx";
import SelectLevel from "../molecule/SelectLevel.tsx";

const Form = () => {
  return (
    <form>
      {inputWithLabel("Task Name")}
      <SelectLevel description="Priority" />
      <SelectLevel description="Complexity" />
      <div className="flex items-center justify-around p-1">
        {dateTime("date")}
        {dateTime("time")}
      </div>
    </form>
  );
};

export default Form;
