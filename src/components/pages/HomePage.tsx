import SearchBar from "../molecule/SearchBar.tsx";
import DropdownList from "../molecule/DropdownList.tsx";
import { taskButton } from "../atoms/buttons.tsx";
// import Cards from "../organism/Cards.tsx";
import Timelined from "../organism/Timeline.tsx";
import useLocalStorage from "../../hooks/useLocalStorage.tsx";

const HomePage = () => {
  const { getLocal } = useLocalStorage();

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

  console.log("get", getLocal());

  return (
    <div className="w-full min-w-[200px]">
      <div className="py-2">
        <SearchBar />
      </div>
      <div className="flex">
        <DropdownList title="Sort" itemsList={sortList} />
        <DropdownList title="Category" itemsList={cetgoryList} />
      </div>

      {/*<Cards mapToObject={getLocal()} />*/}
      <Timelined />

      {taskButton("Add New Task", "new")}
    </div>
  );
};

export default HomePage;
