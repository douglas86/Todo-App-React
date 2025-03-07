import { createContext, Dispatch } from "react";
import { StateType, ActionType } from "./contextTypes.tsx";
import { initialState } from "./initialState.tsx";

interface ContextType {
  state: StateType;
  dispatch: Dispatch<ActionType>;
}

export const Context = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});
