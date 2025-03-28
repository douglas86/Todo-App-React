import SearchBar from "../molecule/SearchBar.tsx";
import DropdownList from "../molecule/DropdownList.tsx";
import { taskButton } from "../atoms/buttons.tsx";
import Cards from "../organism/Cards.tsx";

const HomePage = () => {
  const sortList: Array<string> = [
    "Default",
    "Ascending Date",
    "Descending Date",
    "Ascending complexity",
    "Descending Complexity",
    "Ascending Priority",
    "Descending Priority",
  ];

  // TODO: category list is going to be worked on tags
  const cetgoryList: Array<string> = ["item1", "item2", "item3"];

  // circular progress bar
  //   https://codepen.io/juhaelee/pen/GxymWP

  return (
    <div className="w-full min-w-[200px]">
      <div className="py-2">
        <SearchBar />
      </div>
      <div className="flex">
        <DropdownList title="Sort" itemsList={sortList} />
        <DropdownList title="Category" itemsList={cetgoryList} />
      </div>

      {/*{Object.entries(localStorage).map(([key, value]) => (*/}
      {/*  <div key={key}>*/}
      {/*    <p>key: {key}</p>*/}
      {/*    <p>value: {value}</p>*/}
      {/*  </div>*/}
      {/*))}*/}

      <Cards mapToObject={localStorage} />

      {taskButton("Add New Task", "new")}
    </div>
  );
};

export default HomePage;
