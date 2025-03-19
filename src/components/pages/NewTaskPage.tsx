import PageHeader from "../organism/PageHeader.tsx";
// import Form from "../organism/Form";
import CheckboxList from "../organism/CheckboxList.tsx";
import LevelSelection from "../organism/LevelSelection.tsx";

const NewTaskPage = () => {
  return (
    <div className="sm:w-120 md:w-150 lg:w-200">
      <PageHeader title="Add New Task" />

      <LevelSelection description={"Priority"} />
      <LevelSelection description={"Complexity"} />

      {/*<Form />*/}

      <CheckboxList />
    </div>
  );
};

export default NewTaskPage;
