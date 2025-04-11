import { UseFormRegisterReturn } from "react-hook-form";

// import { FormInputs } from "../../utils/types.tsx";

export const errorMessage = (error?: string) => {
  return error ? (
    <p className={`font-bold text-lg text-red-400 text-center p-2`}>{error}</p>
  ) : null;
};

export const formInput = (name: string, reg: UseFormRegisterReturn) => {
  // const { onChange, onBlur, ref } = reg;

  return (
    <input
      type="text"
      id={name}
      className={`block py-2.5 px-0 w-full text-lg text-green-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
      placeholder=" "
      {...reg}
    />
  );
};

export const formLabel = (htmlFor: string, name: string) => (
  <label
    htmlFor={htmlFor}
    className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  >
    {name}
  </label>
);

export const rangeSlider = (reg: UseFormRegisterReturn) => (
  <div className={`w-full px-4`}>
    <label
      htmlFor="volume"
      className={`block text-sm font-medium text-gray-700 mb-2`}
    >
      Volume
    </label>
    <input
      id="volume"
      type="range"
      min="1"
      max="10"
      className={`w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer accent-blue-600`}
      {...reg}
    />
  </div>
);
