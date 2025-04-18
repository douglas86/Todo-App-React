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

const Timelined = () => {
  const { getLocal } = useLocalStorage();

  console.log("getLocal", getLocal());

  return (
    <div className="w-[32rem] p-3 my-5">
      <Timeline>
        {Object.entries(getLocal()).map(([key, value]) => (
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
              <Typography variant="h5" color="blue-gray">
                <div className={`flex`}>
                  <div
                    className={`mr-1 w-6 h-6 rounded-full ${formatFriendlyDate(value.date).backgroundTextColor}`}
                  ></div>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                    {convertKeyToUsableData(key)}
                  </h5>
                </div>
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              {/*show the date and time of a task*/}
              <div className={`flex m-3`}>
                <div className={`mr-2`}>{calendarIcon}</div>
                <h3
                  className={`text-lg ${formatFriendlyDate(value.date).forgroundTextColor}`}
                >
                  Due Date: {formatFriendlyDate(value.date).text}
                </h3>
              </div>
              {/*priority levels*/}
              <div className={`flex m-3`}>
                <div className={`mr-2`}>{upArrowIcon}</div>
                <h3 className={`text-lg text-gray-400`}>
                  Priority: {checkPriorityLevel(value.priority)} (
                  {value.priority}/10)
                </h3>
              </div>
              {/*complex levels*/}
              <div className={`flex m-3`}>
                <div className={`mr-2`}>{complexIcon}</div>
                <h3 className={`text-lg text-gray-400`}>
                  Complexity: {checkPriorityLevel(value.complexity)} (
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
