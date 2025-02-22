import PageHeader from "../organism/PageHeader.tsx";
import Form from "../organism/Form";

const NewTaskPage = () => {
  return (
    <div className="sm:w-120 md:w-150 lg:w-200">
      <PageHeader title="Add New Task" />
      <Form />
    </div>
  );
};

export default NewTaskPage;
