import { convertKeyToUsableData } from "../utils/helpers.tsx";

export const useLocal = () => {
  const postLocal = (key: string, body: object) => {
    return localStorage.setItem(key, JSON.stringify(body));
  };

  const getLocal = (key: string) => {
    return localStorage.getItem(key);
  };

  // fetches value from local storage based on key value
  const keyExists = (key: string) => {
    const keys: Array<string> = [];

    // function to find value and transform data to array
    const findKey = () => {
      for (let i = 0; i < localStorage.length; i++) {
        // convert key from local to usable data
        const key = convertKeyToUsableData(localStorage.key(i) || "");
        // once value is transformed push value to a key array
        keys.push(key);
      }

      return keys.includes(key);
    };

    return findKey();
  };

  return { postLocal, getLocal, keyExists };
};
