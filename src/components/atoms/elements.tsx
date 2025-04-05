import { ChangeEventHandler } from "react";
import { FieldError } from "react-hook-form";

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

export const errorMessage = (message: FieldError | undefined) => {
  return message ? (
    <p className={`text-red-400 text-center p-2`}>This Field is Required</p>
  ) : null;
};

export const formInput = (name: string, reg: object) => (
  <input
    type="text"
    id={name}
    className={`block py-2.5 px-0 w-full text-sm text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
    placeholder=" "
    {...reg}
  />
);

export const formLabel = (htmlFor: string, name: string) => (
  <label
    htmlFor={htmlFor}
    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  >
    {name}
  </label>
);

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
