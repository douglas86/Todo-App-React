import DatePicker from "react-datepicker";
import { isToday } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { UseFormSetValue, UseFormWatch } from "react-hook-form";
import { FormInputs } from "../../utils/types.tsx";

const DateTimeSelector = ({
  watch,
  setState,
}: {
  watch: UseFormWatch<FormInputs>;
  setState: UseFormSetValue<FormInputs>;
}) => {
  return (
    <DatePicker
      selected={watch("date")}
      dateFormat="d MMMM yyyy h:mmaa"
      onChange={(d) => setState("date", d ? d : new Date())}
      minDate={new Date()}
      showTimeSelect
      minTime={
        isToday(watch("date"))
          ? new Date()
          : new Date(new Date().setHours(0, 0, 0, 0))
      }
      maxTime={new Date(new Date().setHours(23, 59, 59))}
    />
  );
};

export default DateTimeSelector;
