import PageHeader from "../organism/PageHeader.tsx";
import Form from "../organism/Form";

const NewTaskPage = () => {
  return (
    <div className="w-[80%]">
      <PageHeader title="Add New Task" />

      <Form />
    </div>
  );
};

export default NewTaskPage;
