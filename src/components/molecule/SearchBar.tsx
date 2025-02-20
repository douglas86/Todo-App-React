import { searchField, submitButton } from "../atoms/elements.tsx";
import { rightArrowIcon, searchIcon } from "../atoms/icons.tsx";

const SearchBar = () => {
  return (
    <div className="flex items-center border border-slate-500 rounded-lg shadow-sm focus-within:border-slate-500 bg-white">
      {searchIcon()}
      {searchField()}
      {submitButton(rightArrowIcon())}
    </div>
  );
};

export default SearchBar;
