import {
  checkPriorityLevel,
  convertKeyToUsableData,
  formatFriendlyDate,
} from "../../utils/helpers.tsx";
import { editIcon } from "../atoms/iconsCi.tsx";
import { complexIcon } from "../atoms/iconsTb.tsx";
import { roundButton } from "../atoms/buttons.tsx";
import useLocal from "../../hooks/useLocal.tsx";
import { calendarIcon, upArrowIcon } from "../atoms/iconsFa.tsx";
import { tickIcon } from "../atoms/iconsTi.tsx";
import { crossIcon } from "../atoms/iconsGi.tsx";

const Cards = ({ mapToObject }: { mapToObject: Storage | object }) => {
  const { postLocal, getLocal, triggerUpdate } = useLocal();

  const handleClick = (key: string) => {
    const item = getLocal(key);
    const value = item
      ? {
          ...JSON.parse(item),
          checkedCard: !JSON.parse(item).checkedCard,
        }
      : null;

    try {
      if (item) {
        postLocal(key, value);
        triggerUpdate();
      }
    } catch {
      return null;
    }
  };

  return (
    <>
      {Object.entries(mapToObject).map(([key, value], index) => (
        <div
          key={index}
          className="max-w-sm m-2 p-6 border border-gray-200 rounded-lg shadow-sm light:bg-gray-800 light:border-gray-700"
        >
          <div className={"flex"}>
            <div className={`flex items-center w-[70%]`}>
              <a
                href={"#"}
                className={
                  "flex text-sm font-medium text-gray-500 hover:text-gray-900"
                }
              >
                <div
                  className={`mr-1 w-6 h-6 rounded-full ${formatFriendlyDate(value.date).backgroundTextColor}`}
                ></div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  {convertKeyToUsableData(key)}
                </h5>
              </a>
            </div>
            <div className={`flex w-[30%] justify-evenly`}>
              {editIcon}
              {value.checkedCard
                ? roundButton(8, tickIcon, () => handleClick(key), "green-400")
                : roundButton(8, crossIcon, () => handleClick(key), "sky-400")}
            </div>
          </div>
          <div className={"flex m-3"}>
            <div className={"mr-2"}>{calendarIcon}</div>
            <h3
              className={`text-lg ${formatFriendlyDate(value.date).forgroundTextColor}`}
            >
              Due Date: {formatFriendlyDate(value.date).text}
            </h3>
          </div>
          <div className={`flex m-3`}>
            <div className={`mr-2`}>{upArrowIcon}</div>
            <h3 className={`text-lg text-gray-400`}>
              Priority: {checkPriorityLevel(value.Priority)} ({value.Priority}
              /10)
            </h3>
          </div>
          <div className={`flex m-3`}>
            <div className={`mr-2`}>{complexIcon}</div>
            <h3 className={`text-lg text-gray-400`}>
              Complexity: {checkPriorityLevel(value.Complexity)} (
              {value.Complexity}
              /10)
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
