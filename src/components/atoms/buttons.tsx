import { ReactNode, MouseEvent } from "react";
import { addIcon, repeatIcon, saveIcon } from "./icons.tsx";

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
    onClick={handleClick}
    className={`flex w-${size} h-${size} items-center justify-center rounded-full  mr-4 border bg-${backgroundColorGradient}`}
  >
    {text}
  </button>
);

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
 * @param symbol - there is one of three symbols to be showen on the button new, repeat or save
 */
export const taskButton = (text: string, symbol: "new" | "repeat" | "save") => {
  return (
    <a href={symbol !== "new" ? "/" : "/new-task"}>
      <button className="flex space-x-3 w-75 m-auto justify-center items-center px-5 py-3 bg-indigo-500 hover:bg-indigo-800 rounded-full drop-shadow-md cursor-pointer duration-300">
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
