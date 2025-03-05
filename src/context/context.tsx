import { createContext, Dispatch } from "react";
import { StateType } from "./contextTypes.tsx";
import { initialState } from "./initialState.tsx";

interface ContextType {
  state: StateType;
  dispatch: Dispatch<never>;
}

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});
