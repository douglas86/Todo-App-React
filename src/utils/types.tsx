export type NewTaskError = {
  TaskError: string;
};

export type FormInputs = {
  taskName: string;
  priority: string;
  complexity: string;
  date: Date;
};
