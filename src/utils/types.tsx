import { UseFormSetValue } from "react-hook-form";

export type ChecklistTypes = {
  setValue: UseFormSetValue<FormInputs>;
};

export type FormInputs = {
  taskName: string;
  priority: string;
  complexity: string;
  date: Date;
  checkbox: Array<object>;
};
