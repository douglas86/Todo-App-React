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
    <div className="flex flex-col items-center justify-center text-center">
      <label className={` text-lg font-bold text-green-500`}>
        Due Date and Time Selector
      </label>
      <DatePicker
        selected={watch("date")}
        dateFormat="d MMMM yyyy h:mm aa"
        onChange={(d) => setState("date", d ? d : new Date())}
        minDate={new Date()}
        showTimeSelect
        minTime={
          isToday(watch("date"))
            ? new Date()
            : new Date(new Date().setHours(0, 0, 0, 0))
        }
        maxTime={new Date(new Date().setHours(23, 59, 59))}
        className={`rounded-full m-4 text-center`}
      />
    </div>
  );
};

export default DateTimeSelector;
