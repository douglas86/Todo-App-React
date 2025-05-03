import { MdDeleteForever } from "react-icons/md";

import { deleteIconStyles, iconsStyles } from "../../../style/atomStyling.tsx";

export const deleteIcon = () => {
  return (
    <button>
      <MdDeleteForever className={`${iconsStyles} ${deleteIconStyles}`} />
    </button>
  );
};
