import { FormInputs } from "../../utils/types.tsx";
import {
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  Typography,
} from "@material-tailwind/react";
import { tickIcon } from "../atoms/icons/iconsTi.tsx";
import { crossIcon } from "../atoms/icons/iconsGi.tsx";
import React, { useState } from "react";
import {
  checkPriorityLevel,
  formatFriendlyDate,
  toTitleCase,
} from "../../utils/helpers.tsx";
import { calendarIcon, upArrowIcon } from "../atoms/icons/iconsFa.tsx";
import { complexIcon } from "../atoms/icons/iconsTb.tsx";
import useLocalStorage from "../../hooks/useLocalStorage.tsx";
import { editIcon } from "../atoms/icons/iconsCi.tsx";
import { deleteIcon } from "../atoms/icons/iconsMd.tsx";
import ModalDialogBox from "../organism/ModalDialogBox.tsx";

const TimelineCard = ({
  title,
  value,
  showConnector = false,
}: {
  title: string;
  value: FormInputs;
  showConnector?: boolean;
}) => {
  const [checked, setChecked] = useState(value.checkedCard);
  const [showModal, setShowModal] = useState(false);
  const { postLocal } = useLocalStorage();

  // click handler to handle toggling of if the card is checked or not
  const handleClick = (t: string) => {
    const toggled = !checked;
    setChecked(toggled);
    postLocal(t, { ...value, checkedCard: toggled });
  };

  // click handler to edit the card
  const handleEdit = (message: string) => {
    console.log(`You edited ${message} card`);
  };

  // click handler to delete the card
  const handleDelete = () => setShowModal(true);

  return (
    <div className="m-auto">
      {/*show dialog box for deleting a card*/}
      {showModal && (
        <ModalDialogBox onClose={() => setShowModal(false)} title={title} />
      )}
      {/*show connector line only if showConnector is true*/}
      {showConnector ? (
        <TimelineConnector className="h-[calc(100%+1rem)] !w-[8px] bg-blue-500 mx-[3.5%]" />
      ) : null}
      <TimelineHeader className={`items-center gap-5 w-full`}>
        {/*handles button by connector line*/}
        {/*change background color based on the boolean state of the checked*/}
        <TimelineIcon
          className={`w-12 h-12 flex items-center justify-center rounded-full ${checked ? "bg-green-600" : "bg-red-500"}`}
        >
          {/*change button icon based on the boolean state*/}
          {checked ? (
            <button
              name={title}
              className={`flex justify-center items-center`}
              onClick={() => handleClick(title)}
            >
              {tickIcon}
            </button>
          ) : (
            <button
              name={title}
              className={`flex justify-center items-center`}
              onClick={() => handleClick(title)}
            >
              {crossIcon}
            </button>
          )}
        </TimelineIcon>
        <div className="flex justify-between items-center w-[80%]">
          <Typography
            variant="h5"
            color="blue-gray"
            className={`w-[80%]`}
            {...({} as React.ComponentProps<typeof Typography>)}
          >
            {toTitleCase(title) || "No Title"}
          </Typography>
          <div className={`flex w-[50%] items-center gap-5`}>
            {editIcon(() => handleEdit(title))}
            {deleteIcon(() => handleDelete())}
          </div>
        </div>
      </TimelineHeader>
      <TimelineBody className="pb-8">
        {/*show the date and time of a task*/}
        <div className={`flex m-4`}>
          <div className={`mr-2`}>{calendarIcon}</div>
          <h3
            className={`text-lg ${formatFriendlyDate(value.date.toString()).forgroundTextColor}`}
          >
            Due Date: {formatFriendlyDate(value.date.toString()).text}
          </h3>
        </div>
        {/*priority levels*/}
        <div className={`flex m-4`}>
          <div className={`mr-2`}>{upArrowIcon}</div>
          <h3 className={`text-lg text-gray-400`}>
            Priority: {checkPriorityLevel(parseInt(value.priority))} (
            {value.priority}/10)
          </h3>
        </div>
        {/*complex levels*/}
        <div className={`flex m-4`}>
          <div className={`mr-2`}>{complexIcon}</div>
          <h3 className={`text-lg text-gray-400`}>
            Complexity: {checkPriorityLevel(parseInt(value.complexity))} (
            {value.complexity}/10)
          </h3>
        </div>
      </TimelineBody>
    </div>
  );
};

export default TimelineCard;
