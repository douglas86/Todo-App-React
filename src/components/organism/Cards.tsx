import { convertKeyToUsableData } from "../../utils/helpers.tsx";
import { crossIcon, editIcon, tickIcon } from "../atoms/icons.tsx";
import { roundButton } from "../atoms/buttons.tsx";
import { useLocal } from "../../hooks/useLocal.tsx";

const Cards = ({ mapToObject }: { mapToObject: Storage | object }) => {
  const { getLocal } = useLocal();

  const handleToggle = () => {};

  const handleClick = (key: string) => {
    // const item = localStorage.getItem(key);
    const item = getLocal(key);

    try {
      return item
        ? localStorage.setItem(
            key,
            JSON.stringify({
              ...JSON.parse(item),
              checkedCard: !JSON.parse(item).checkedCard,
            }),
          )
        : null;
    } catch {
      return null;
    }
  };

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
              {value.checkedCard
                ? roundButton(8, tickIcon, () => handleClick(key), "green-400")
                : roundButton(8, crossIcon, () => handleClick(key), "sky-400")}
            </div>
          </div>

          <p>{value}</p>
        </div>
      ))}
    </>
  );
};

export default Cards;
