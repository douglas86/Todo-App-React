export const useLocal = () => {
  const postLocal = (key: string, body: object) => {
    return localStorage.setItem(JSON.stringify(key), JSON.stringify(body));
  };

  return { postLocal };
};
