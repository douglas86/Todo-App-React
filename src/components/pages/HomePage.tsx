import { useEffect, useState } from "react";

import SearchBar from "../molecule/SearchBar.tsx";
import DropdownList from "../molecule/DropdownList.tsx";
import { taskButton } from "../atoms/buttons.tsx";
import Cards from "../organism/Cards.tsx";

const HomePage = () => {
  const parseStorage = () => {
    const entries = Object.entries(localStorage).map(([key, value]) => {
      try {
        return [key, JSON.parse(value)];
      } catch {
        return [key, value];
      }
    });

    return Object.fromEntries(entries);
  };

  const [storageData, setStorageData] = useState(parseStorage);

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

  useEffect(() => {
    const handleStorageChange = () => {
      setStorageData(parseStorage());
    };

    // Listen to `storage` event (fired in other tabs)
    window.addEventListener("storage", handleStorageChange);

    // Optional: use a custom event for same-tab updates
    window.addEventListener("local-storage-updated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage-updated", handleStorageChange);
    };
  }, []);

  return (
    <div className="w-full min-w-[200px]">
      <div className="py-2">
        <SearchBar />
      </div>
      <div className="flex">
        <DropdownList title="Sort" itemsList={sortList} />
        <DropdownList title="Category" itemsList={cetgoryList} />
      </div>

      <Cards mapToObject={storageData} />

      {taskButton("Add New Task", "new")}
    </div>
  );
};

export default HomePage;
