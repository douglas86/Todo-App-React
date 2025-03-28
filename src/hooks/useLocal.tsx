export const useLocal = () => {
  const postLocal = (key: string, body: object) => {
    return localStorage.setItem(JSON.stringify(key), JSON.stringify(body));
  };

  // fetches value from local storage based on key value
  const getLocal = (key: string) => {
    const keys: Array<string> = [];

    // function to find value and transform data to array
    const findKey = () => {
      for (let i = 0; i < localStorage.length; i++) {
        // convert key from local to usable data
        const key = (localStorage.key(i) || "")
          .split("")
          .slice(1, -1)
          .join("")
          .toLowerCase();
        // once value is transformed push value to a key array
        keys.push(key);
      }

      return keys.includes(key);
    };

    return findKey();
  };

  return { postLocal, getLocal };
};
