import SearchBar from "../molecule/SearchBar.tsx";
import DropdownList from "../molecule/DropdownList.tsx";

const HomePage = () => {
  const sortList: Array<string> = ["item1", "item2", "item3"];
  const cetgoryList: Array<string> = ["item1", "item2", "item3"];

  return (
    <div className="w-full min-w-[200px]">
      <div className="py-2">
        <SearchBar />
      </div>
      <div className="flex">
        <DropdownList title="Sort" itemsList={sortList} />
        <DropdownList title="Category" itemsList={cetgoryList} />
      </div>
    </div>
  );
};

export default HomePage;
