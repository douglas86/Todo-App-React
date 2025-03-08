interface CheckboxState {
  input: string;
  items: string[];
}

export interface StateType {
  checkboxReducer: CheckboxState;
}

export type ActionType =
  | { type: "CHECKBOX_INPUT"; payload: string } // update the input as you type
  | { type: "CLEAR_CHECKBOX_INPUT" } // clears the input once enter is pressed in an input element
  | { type: "ADD_CHECKBOX_INPUT"; payload: string }; // adds item to an item array
