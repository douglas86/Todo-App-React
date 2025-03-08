import { Reducer } from "./combineReducers.tsx";

type CheckboxState = {
  input: string;
  items: Array<string>;
};

export const checkboxReducer: Reducer<CheckboxState> = (state, action) => {
  const findIndex = (stringInArray: string) =>
    state.items.indexOf(stringInArray);

  switch (action.type) {
    case "CHECKBOX_INPUT":
      return { ...state, input: action.payload as string };
    case "CLEAR_CHECKBOX_INPUT":
      return { ...state, input: "" };
    case "ADD_CHECKBOX_INPUT":
      return { ...state, items: [...state.items, action.payload] };
    case "DELETE_ITEM_FROM_ITEMS_ARRAY":
      delete state.items[findIndex(action.payload)];
      return { ...state };
    default:
      return state;
  }
};
