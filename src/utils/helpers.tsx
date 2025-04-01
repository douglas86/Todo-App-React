import { format, isToday, isTomorrow, parseISO } from "date-fns";

export const convertKeyToUsableData = (str: string) =>
  str.split("").slice(1, -1).join("").toLowerCase();

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
