import { ChangeEventHandler } from "react";

import { toTitleCase } from "../../utils/helpers";

const RangeSlider = ({
  title,
  watch,
  handleChange,
}: {
  title: string;
  watch: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className={`w-full my-6`}>
      {/*range label*/}
      <label
        htmlFor={title}
        className={`block text-lg font-medium text-gray-700 mb-2`}
      >
        {toTitleCase(title)} Level
      </label>

      {/*show the value of the range*/}
      <label className={`block text-sm font-medium text-gray-700 mb-2`}>
        Value: {watch ?? "1"}
      </label>

      {/*slider*/}
      <input
        id={title}
        type="range"
        min="1"
        max="10"
        value={watch ?? "1"}
        className={`w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600`}
        onChange={handleChange}
      />

      {/*display min and max value under slider*/}
      <div className={`flex justify-between text-lg text-gray-600 mb-1`}>
        <span>1 min</span>
        <span>10 max</span>
      </div>
    </div>
  );
};

export default RangeSlider;
