import { format, isToday, isTomorrow, parseISO } from "date-fns";

export const checkPriorityLevel = (num: number) => {
  return num < 5 ? "Low" : num < 8 ? "Medium" : "High";
};

/**
 * convert the key from storage to a workable string value
 * @param str
 */
export const convertKeyToUsableData = (str: string) =>
  str.split("").slice(1, -1).join("").toLowerCase();

/**
 * check to see if the date is tomorrow, today
 * if any other date returns the normal date
 * @param isoDate
 */
export const formatFriendlyDate = (isoDate: string) => {
  const date = parseISO(isoDate);

  if (isToday(date)) {
    return {
      text: `Today, ${format(date, "hh:mm a")}`,
      forgroundTextColor: "text-green-600",
      backgroundTextColor: "bg-green-600",
    };
  }

  if (isTomorrow(date)) {
    return {
      text: `Tomorrow, ${format(date, "hh:mm a")}`,
      forgroundTextColor: "text-yellow-400",
      backgroundTextColor: "bg-yellow-400",
    };
  }

  return {
    text: format(date, "MMMM do, hh:mm a"),
    forgroundTextColor: "text-gray-400",
    backgroundTextColor: "bg-gray-400",
  };
};

export const toTitleCase = (str: string) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
