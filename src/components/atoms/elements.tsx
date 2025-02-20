import { ReactNode } from "react";

export const searchField = (placeholder = "Search") => (
  <input
    className="flex-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm px-3 py-2 focus:outline-none"
    placeholder={placeholder}
  />
);

// Buttons
export const submitButton = (text: ReactNode | string) => (
  <button
    className="p-2 bg-blue-100 hover:bg-blue-200 rounded-r-lg border-l border-slate-300"
    type="submit"
  >
    {text}
  </button>
);

/**
 * This button is used for adding or repeating tasks
 * @param text - what wording you want on the button
 * @param symbol - one of two strings new or repeat
 */
export const taskButton = (text: string, symbol: "new" | "repeat") => {
  return (
    <button
      className="flex space-x-3 w-75 m-auto justify-center items-center px-5 py-3 bg-indigo-500 hover:bg-indigo-800 rounded-full drop-shadow-md cursor-pointer duration-300"
      onClick={() => console.log("This button was clicked")}
    >
      {symbol === "repeat" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      )}

      <span className="text-white text-xl font-bold">{text}</span>
    </button>
  );
};
