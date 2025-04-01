import { IoAddCircleOutline } from "react-icons/io5";
import { BsArrowRepeat } from "react-icons/bs";
import { FaArrowRight, FaArrowLeft, FaRegSave } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { GiSkullCrossedBones } from "react-icons/gi";
import { CiEdit } from "react-icons/ci";

import { iconsStyles } from "../../style/atomStyling.tsx";

export const addIcon = <IoAddCircleOutline className={iconsStyles} />;

export const calendarIcon = <FaRegCalendarAlt className={iconsStyles} />;

export const crossIcon = <GiSkullCrossedBones className={iconsStyles} />;

export const deleteIcon = <MdDeleteForever className={iconsStyles} />;

export const editIcon = <CiEdit className={iconsStyles} />;

export const leftArrowIcon = () => <FaArrowLeft className={iconsStyles} />;

export const repeatIcon = <BsArrowRepeat className={iconsStyles} />;

export const rightArrowIcon = () => <FaArrowRight className={iconsStyles} />;

export const saveIcon = <FaRegSave className={iconsStyles} />;

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

export const tickIcon = <TiTick className={iconsStyles} />;
