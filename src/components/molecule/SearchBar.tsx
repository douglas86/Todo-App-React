import React, { Dispatch, SetStateAction } from "react";

const SearchBar = ({
  search,
}: {
  search: Dispatch<SetStateAction<string>>;
}) => {
  // change handler for input element
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
  };

  // BUG: the arrow on the search is not clickable and is not showing the other itesm
  // TODO: change Europe to actual sort categories

  return (
    <div className="flex w-full max-w-sm min-w-[400px] justify-center">
      <div className="relative mt-2">
        <div className="absolute top-1 left-1 flex items-center">
          <button
            id="dropdownButton"
            className="rounded border border-transparent py-1 px-1.5 text-center flex items-center text-sm transition-all text-slate-600"
          >
            <span id="dropdownSpan" className="text-ellipsis overflow-hidden">
              Europe
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div className="h-6 border-l border-slate-200 ml-1"></div>
          <div
            id="dropdownMenu"
            className="min-w-[150px] overflow-hidden absolute left-0 w-full mt-10 hidden w-full bg-white border border-slate-200 rounded-md shadow-lg z-10"
          >
            <ul id="dropdownOptions">
              <li
                className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer"
                data-value="Europe"
              >
                Europe
              </li>
              <li
                className="px-4 py-2 text-slate-600 hover:bg-slate-50 text-sm cursor-pointer"
                data-value="Australia"
              >
                Australia
              </li>
              <li
                className="px-4 py-2 text-slate-600 hover:bg-slate-5- text-sm cursor-pointer"
                data-value="Africa"
              >
                Africa
              </li>
            </ul>
          </div>
        </div>
        <input
          type="text"
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pr-12 pl-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Germany..."
          onChange={handleChange}
        />

        <button
          className="absolute right-1 top-1 rounded bg-slate-800 p-1.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
