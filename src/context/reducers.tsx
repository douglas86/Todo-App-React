import { Reducer } from "./combineReducers.tsx";

type CheckboxState = {
  checked: boolean;
  input: string;
};

export const checkboxReducer: Reducer<CheckboxState> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "checkboxInput":
      return { ...state, input: payload as string };
    case "TOGGLE_CHECK":
      return { ...state, checked: !state.checked };
    default:
      return state;
  }
};
