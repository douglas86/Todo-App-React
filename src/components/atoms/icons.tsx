import { IoAddCircleOutline } from "react-icons/io5";
import { BsArrowRepeat } from "react-icons/bs";
import { FaArrowRight, FaRegSave } from "react-icons/fa";

export const addIcon = <IoAddCircleOutline className="scale-120 w-6 h-6" />;

export const repeatIcon = <BsArrowRepeat className="scale-120 w-6 h-6" />;

export const rightArrowIcon = () => {
  return (
    <div className="pl-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </div>
  );
};

export const saveIcon = <FaRegSave className="scale-120 w-6 h-6" />;

export const searchIcon = () => {
  return (
    <div className="pl-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 top-2.5 left-2.5 text-slate-600"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};
