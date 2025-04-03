import { FaArrowRight, FaArrowLeft, FaRegSave } from "react-icons/fa";
import { FaRegCalendarAlt, FaArrowUp } from "react-icons/fa";
import { iconsStyles } from "../../../style/atomStyling.tsx";

export const calendarIcon = <FaRegCalendarAlt className={iconsStyles} />;

export const leftArrowIcon = () => <FaArrowLeft className={iconsStyles} />;

export const rightArrowIcon = () => <FaArrowRight className={iconsStyles} />;

export const saveIcon = <FaRegSave className={iconsStyles} />;

export const upArrowIcon = <FaArrowUp className={iconsStyles} />;
