// checkbox interface
export interface Checkbox {
  id: number;
  label: string;
  checked: boolean;
}

export interface CheckboxItemsInterface {
  checkbox: { id: number; label: string; checked: boolean };
  onToggle: () => void;
  onDelete: () => void;
}
