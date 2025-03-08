import { Reducer } from "./combineReducers.tsx";

type CheckboxState = {
  input: string;
  items: Array<string>;
};

export const checkboxReducer: Reducer<CheckboxState> = (state, action) => {
  switch (action.type) {
    case "CHECKBOX_INPUT":
      return { ...state, input: action.payload as string };
    case "CLEAR_CHECKBOX_INPUT":
      return { ...state, input: "" };
    case "ADD_CHECKBOX_INPUT":
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};
