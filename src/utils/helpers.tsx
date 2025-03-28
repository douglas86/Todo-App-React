export const convertKeyToUsableData = (str: string) =>
  str.split("").slice(1, -1).join("").toLowerCase();
