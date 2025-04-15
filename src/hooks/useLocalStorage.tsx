import { convertKeyToUsableData } from "../utils/helpers.tsx";
import { useEffect, useState } from "react";

const useLocalStorage = () => {
  const parseStorage = () => {
    const entries = Object.entries(localStorage).map(([key, value]) => {
      try {
        return [key, JSON.parse(value)];
      } catch {
        return [key, value];
      }
    });

    return Object.fromEntries(entries);
  };

  const [storageData, setStorageData] = useState(parseStorage);

  // sets or updates the key in local storage
  const postLocal = (key: string, body: object) => {
    return localStorage.setItem(key, JSON.stringify(body));
  };

  // get a specific object from local storage based on a key
  // when no key is passed it returns everything from local storage
  // when key is passed it only return that key value pair
  const getLocal = (key?: string) => {
    return key ? localStorage.getItem(key) : storageData;
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

  // forces useEffect to update when event is triggered
  const triggerUpdate = () => {
    return window.dispatchEvent(new Event("local-storage-updated"));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setStorageData(parseStorage());
    };

    // Listen to `storage` event (fired in other tabs)
    window.addEventListener("storage", handleStorageChange);

    // Optional: use a custom event for same-tab updates
    window.addEventListener("local-storage-updated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage-updated", handleStorageChange);
    };
  }, [storageData]);

  return { postLocal, getLocal, keyExists, triggerUpdate };
};

export default useLocalStorage;
