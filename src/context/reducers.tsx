import { Reducer } from "./combineReducers.tsx";

export const checkboxReducer: Reducer<{ checked: boolean }> = (
  state,
  action,
) => {
  switch (action.type) {
    case "TOGGLE_CHECK":
      return { ...state, checked: !state.checked };
    default:
      return state;
  }
};
