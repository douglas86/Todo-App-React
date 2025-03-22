import PageHeader from "../organism/PageHeader.tsx";
import Form from "../organism/Form";
import { useEffect } from "react";

const NewTaskPage = () => {
  const session = localStorage.getItem("session");

  useEffect(() => {
    sessionStorage.setItem("session", JSON.stringify({}));
  }, [session]);

  return (
    <div className="sm:w-120 md:w-150 lg:w-200">
      <PageHeader title="Add New Task" />

      <Form />
    </div>
  );
};

export default NewTaskPage;
