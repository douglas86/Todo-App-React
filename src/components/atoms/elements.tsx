import { MouseEventHandler, ReactNode } from "react";

export const searchField = (placeholder = "Search") => (
  <input
    className="flex-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm px-3 py-2 focus:outline-none"
    placeholder={placeholder}
  />
);

// Buttons
export const clickableButton = (
  clickHandler: MouseEventHandler<HTMLButtonElement>,
) => <button onClick={clickHandler}>Click Me!</button>;

export const submitButton = (text: ReactNode | string) => (
  <button
    className="p-2 bg-blue-100 hover:bg-blue-200 rounded-r-lg border-l border-slate-300"
    type="submit"
  >
    {text}
  </button>
);
