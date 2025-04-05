import { ReactNode, MouseEvent, MouseEventHandler } from "react";

import { addIcon } from "./icons/iconsIo5.tsx";
import { repeatIcon } from "./icons/iconsBs.tsx";
import { saveIcon } from "./icons/iconsFa.tsx";

import { formButtonStyles } from "../../style/atomStyling.tsx";

export const cancelButton = (redirectURL: string) => (
  <a href={redirectURL}>
    <button
      type="button"
      className={`text-red-800 bg-yellow-400 hover:bg-yellow-800 ${formButtonStyles} focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800`}
    >
      Cancel
    </button>
  </a>
);

/**
 * This button is completely round passing in the size
 * @param size - size of button in width and height
 * @param text - add text or symbol
 * @param handleClick - click handler
 * @param backgroundColorGradient - background color and the gradient
 */
export const roundButton = (
  size: number,
  text: ReactNode | string,
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void,
  backgroundColorGradient?: string,
) => (
  <button
    type="button"
    onClick={handleClick}
    className={`flex w-${size} h-${size} items-center justify-center rounded-full  mr-4 border bg-${backgroundColorGradient}`}
    name={`${text}`}
  >
    {text}
  </button>
);

/**
 * This button is used to conjunction with a form
 */
export const submitButton = () => (
  <button
    type="submit"
    className={`text-white bg-blue-700 hover:bg-blue-800 ${formButtonStyles} focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
  >
    Submit
  </button>
);

/**
 * This button is used for adding or repeating tasks
 * @param text - what wording you want on the button
 * @param symbol - there is one of three symbols to be showen on the button new, repeat or save
 * @param disabled
 * @param handleClick
 */
export const taskButton = (
  text: string,
  symbol: "new" | "repeat" | "save",
  disabled?: boolean,
  handleClick?: MouseEventHandler<HTMLButtonElement>,
) => {
  return (
    <a href={symbol !== "new" ? "/" : "/new-task"}>
      <button
        type={symbol === "save" ? "submit" : "button"}
        className="flex space-x-3 w-75 m-auto justify-center items-center px-5 py-3 bg-indigo-500 hover:bg-indigo-800 rounded-full drop-shadow-md cursor-pointer duration-300"
        disabled={disabled}
        onClick={handleClick}
      >
        {symbol === "repeat"
          ? repeatIcon
          : symbol === "save"
            ? saveIcon
            : addIcon}
        <span className="text-white text-xl font-bold">{text}</span>
      </button>
    </a>
  );
};
