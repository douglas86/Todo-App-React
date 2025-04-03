import { submitButton } from "../atoms/buttons.tsx";
import { searchField } from "../atoms/elements.tsx";
import { searchIcon } from "../atoms/icons/iconsGeneral.tsx";
import { rightArrowIcon } from "../atoms/icons/iconsFa.tsx";

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
