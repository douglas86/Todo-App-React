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
      />
    </div>
  );
};

export const errorMessage = (message: string) => {
  return message !== "" ? (
    <p className={`font-bold text-center text-red-400`}>{message}</p>
  ) : null;
};

export const inputWithLabel = (
  text: string,
  handleClick: ChangeEventHandler<HTMLInputElement>,
) => (
  <div className="relative mt-12 mb-5">
    <input
      type="text"
      className="peer w-full border-b rounded-full placeholder:text-transparent"
      onChange={handleClick}
      placeholder={text}
      required
    />
    <label className="absolute left-2 ml-1 bg-gray-100 font-bold -translate-y-8 px-1 text-lg duration-100 ease-linear peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:ml-20 peer-focus:-translate-y-8 peer-focus:px-1 peer-focus:text-lg">
      {text}
    </label>
  </div>
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
