interface CheckboxState {
  input: string;
}

export interface StateType {
  checkboxReducer: CheckboxState;
}

export type ActionType =
  | { type: "CHECKBOX_INPUT"; payload: string }
  | { type: "TOGGLE_CHECKBOX" }; // this one I can delete when I have more types, its example for now
