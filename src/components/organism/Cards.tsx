import { convertKeyToUsableData } from "../../utils/helpers.tsx";
import { editIcon, tickIcon } from "../atoms/icons.tsx";

const Cards = ({ mapToObject }: { mapToObject: Storage | object }) => {
  return (
    <>
      {Object.entries(mapToObject).map(([key, value]) => (
        <div
          key={key}
          className="max-w-sm m-2 p-6 border border-gray-200 rounded-lg shadow-sm light:bg-gray-800 light:border-gray-700"
        >
          <div className={`flex`}>
            <div className={`flex items-center w-[70%]`}>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  {convertKeyToUsableData(key)}
                </h5>
              </a>
            </div>
            <div className={`flex w-[30%] justify-evenly`}>
              {editIcon}
              {tickIcon}
            </div>
          </div>

          <p>{value}</p>
        </div>
      ))}
    </>
  );
};

export default Cards;
