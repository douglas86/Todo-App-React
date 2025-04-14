import { UseFormSetValue } from "react-hook-form";
import { ReactNode } from "react";

export type ContainerTypes = {
  children: ReactNode;
};

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
