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
import React from "react";
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

const TimelineCard = ({
  title,
  value,
  showConnector = false,
}: {
  title: string;
  value: FormInputs;
  showConnector?: boolean;
}) => {
  const [checked, setChecked] = React.useState(value.checkedCard);
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
  const handleDelete = (message: string) => {
    console.log(`You deleted ${message} card`);
  };

  return (
    <>
      {/*show connector line only if showConnector is true*/}
      {showConnector ? (
        <TimelineConnector className="h-[calc(100%+1rem)] !w-[8px] bg-blue-500 mx-[3.5%]" />
      ) : null}
      <TimelineHeader className={`items-center gap-5`}>
        {/*handles button by connector line*/}
        {/*change background color based on the boolean state of the checked*/}
        <TimelineIcon
          className={`p-0 w-10 h-10 flex items-center justify-center rounded-full ${checked ? "bg-green-600" : "bg-red-500"}`}
        >
          {/*change button icon based on the boolean state*/}
          {checked ? (
            <button
              name={title}
              className={`flex w-10 h-10 justify-center items-center`}
              onClick={() => handleClick(title)}
            >
              {tickIcon}
            </button>
          ) : (
            <button
              name={title}
              className={`flex w-10 h-10 justify-center items-center`}
              onClick={() => handleClick(title)}
            >
              {crossIcon}
            </button>
          )}
        </TimelineIcon>
        <Typography
          variant="h5"
          color="blue-gray"
          {...({} as React.ComponentProps<typeof Typography>)}
        >
          {toTitleCase(title) || "No Title"}
        </Typography>
        {editIcon(() => handleEdit(title))}
        {deleteIcon(() => handleDelete(title))}
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
    </>
  );
};

export default TimelineCard;
