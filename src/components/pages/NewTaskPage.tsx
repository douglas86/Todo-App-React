import { pageTitle } from "../atoms/elements.tsx";
import { roundButton } from "../atoms/buttons.tsx";

const NewTaskPage = () => {
  return (
    <div className="flex">
      {roundButton(10, "e")}
      {pageTitle("Add New Task")}
    </div>
  );
};

export default NewTaskPage;
