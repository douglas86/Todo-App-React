import { useContext } from "react";
import { Context } from "../context/context.tsx";

const useAppContext = () => {
  return useContext(Context);
};

export default useAppContext;
