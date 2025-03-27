/**
 * custom hook used for fetching and posting data
 */
export const useSession = () => {
  const post = (body: object) => {
    const task = body;
    const existing = sessionStorage.getItem("session");
    const sessionTask = existing ? JSON.parse(existing) : {};

    const storingTask = { ...sessionTask, ...task };

    return sessionStorage.setItem("session", JSON.stringify(storingTask));
  };

  const get = () => {
    return sessionStorage.getItem("session");
  };

  const error = (key: string, err: string) => {
    return sessionStorage.setItem(key, err);
  };

  return { post, get, error };
};
