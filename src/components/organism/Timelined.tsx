import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { tickIcon } from "../atoms/icons/iconsTi.tsx";
import useLocalStorage from "../../hooks/useLocalStorage.tsx";
import {
  checkPriorityLevel,
  convertKeyToUsableData,
  formatFriendlyDate,
} from "../../utils/helpers.tsx";
import { calendarIcon, upArrowIcon } from "../atoms/icons/iconsFa.tsx";
import { complexIcon } from "../atoms/icons/iconsTb.tsx";
import { FormInputs } from "../../utils/types.tsx";

const Timelined = () => {
  const { getLocal } = useLocalStorage();
  const entries: [string, FormInputs][] = Object.entries(getLocal());

  console.log("getLocal", getLocal());

  return (
    <div className="w-[32rem] p-3 my-5">
      <Timeline>
        {entries.map(([key, value]) => (
          <TimelineItem key={key}>
            <TimelineConnector className={`flex !w-1 bg-blue-500 ml-4.5`} />
            <TimelineHeader>
              <TimelineIcon className="p-0 bg-green-600">
                <button
                  className={`flex w-10 h-10 justify-center items-center`}
                  onClick={() => console.log("clicked")}
                >
                  {tickIcon}
                </button>
              </TimelineIcon>
              {/*timeline header*/}
              <Typography
                variant="h5"
                color="blue-gray"
                {...({} as React.ComponentProps<typeof Typography>)}
              >
                {convertKeyToUsableData(key) || "No Title"}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              {/*show the date and time of a task*/}
              <div className={`flex m-3`}>
                <div className={`mr-2`}>{calendarIcon}</div>
                <h3
                  className={`text-lg ${formatFriendlyDate(value.date.toString()).forgroundTextColor}`}
                >
                  Due Date: {formatFriendlyDate(value.date.toString()).text}
                </h3>
              </div>
              {/*priority levels*/}
              <div className={`flex m-3`}>
                <div className={`mr-2`}>{upArrowIcon}</div>
                <h3 className={`text-lg text-gray-400`}>
                  Priority: {checkPriorityLevel(parseInt(value.priority))} (
                  {value.priority}/10)
                </h3>
              </div>
              {/*complex levels*/}
              <div className={`flex m-3`}>
                <div className={`mr-2`}>{complexIcon}</div>
                <h3 className={`text-lg text-gray-400`}>
                  Complexity: {checkPriorityLevel(parseInt(value.complexity))} (
                  {value.complexity}/10)
                </h3>
              </div>
            </TimelineBody>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Timelined;
