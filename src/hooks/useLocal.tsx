import { convertKeyToUsableData } from "../utils/helpers.tsx";

const useLocal = () => {
  // sets or updates the key in local storage
  const postLocal = (key: string, body: object) => {
    return localStorage.setItem(key, JSON.stringify(body));
  };

  // get a specific object from local storage based on key
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

export default useLocal;
