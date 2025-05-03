import { MouseEvent } from "react";

import { CiEdit } from "react-icons/ci";

import { iconsStyles } from "../../../style/atomStyling.tsx";

type EditIconProps = {
  clickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const editIcon = (clickHandler: EditIconProps["clickHandler"]) => {
  return (
    <button onClick={clickHandler}>
      <CiEdit className={iconsStyles} />
    </button>
  );
};
