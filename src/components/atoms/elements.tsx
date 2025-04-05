import { ChangeEventHandler } from "react";

export const dateTime = (
  type: "date" | "time",
  handleChange: ChangeEventHandler,
) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">
        {type === "date" ? "Select Due Date" : "Select Time"}
      </label>
      <input
        type={type}
        className="border rounded-lg w-50 h-10 m-4 p-4"
        aria-label="Date and time"
        onChange={handleChange}
        required
      />
    </div>
  );
};

/**
 * This is the page title that sits at the top of the page with the home button next to it
 * @param title
 */
export const pageTitle = (title: string) => (
  <h1 className="text-2xl lg:text-4xl">{title}</h1>
);

export const searchField = (
  placeholder = "Search",
  placeholderColorText?: string,
) => (
  <input
    className={`flex-1 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm px-3 py-2 focus:outline-none ${placeholderColorText}`}
    placeholder={placeholder}
  />
);
