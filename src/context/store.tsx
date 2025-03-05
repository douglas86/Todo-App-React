import { useMemo, useReducer } from "react";
import { ReactNode } from "react";
import { rootReducers } from "./rootReducers.tsx";
import { Context } from "./context.tsx";
import { StateType } from "./contextTypes.tsx";
import { initialState } from "./initialState.tsx";

const init = (initialState: StateType) => {
  const { checkboxReducer } = initialState;

  return {
    checkboxReducer,
  };
};

export const Provider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(rootReducers, initialState, init);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
