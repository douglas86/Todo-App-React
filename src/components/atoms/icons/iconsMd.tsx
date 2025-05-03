import { MouseEvent } from "react";
import { MdDeleteForever } from "react-icons/md";

import { deleteIconStyles, iconsStyles } from "../../../style/atomStyling.tsx";

type DeleteIconProps = {
  clickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const deleteIcon = (clickHandler: DeleteIconProps["clickHandler"]) => {
  return (
    <button onClick={clickHandler}>
      <MdDeleteForever className={`${iconsStyles} ${deleteIconStyles}`} />
    </button>
  );
};
