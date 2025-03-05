import { combineReducers } from "./combineReducers.tsx";
import { checkboxReducer } from "./reducers.tsx";

export const rootReducers = combineReducers({
  checkboxReducer,
});
