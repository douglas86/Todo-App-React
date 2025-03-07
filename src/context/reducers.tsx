import { Reducer } from "./combineReducers.tsx";

type CheckboxState = {
  input: string;
};

export const checkboxReducer: Reducer<CheckboxState> = (state, action) => {
  switch (action.type) {
    case "CHECKBOX_INPUT":
      return { ...state, input: action.payload as string };
    default:
      return state;
  }
};
