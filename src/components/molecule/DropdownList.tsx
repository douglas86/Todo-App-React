import { useState } from "react";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

const DropdownList = ({
  title,
  itemsList,
}: {
  title: string;
  itemsList: Array<string>;
}) => {
  const [open, setOpen] = useState(false);

  console.log("open", open);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Menu as="div" className="relative inline-block min-w-[200px] p-2">
      <div>
        <MenuButton
          onClick={handleClick}
          className="inline-flex w-full justify-center gap-x-3 rounded-md bg-white px-3 py-3 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
        >
          {title}
          {open ? (
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 size-5 text-gray-400"
            />
          ) : (
            <ChevronUpIcon
              aria-hidden="true"
              className="-mr-1 size-5 text-gray-400"
            />
          )}
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 w-46 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in p-1 m-2"
      >
        <div className="py-1">
          {itemsList.map((item: string, index: number) => (
            <label
              key={index}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 cursor-pointer
               hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
            >
              <input
                type="radio"
                name="menu-selection"
                value={item}
                className="hidden peer"
              />
              <span
                className="w-4 h-4 border border-gray-400 rounded-full peer-checked:bg-blue-500
                 peer-checked:border-blue-500"
              />
              {item}
            </label>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

DropdownList.propTypes = {
  title: PropTypes.string.isRequired,
  itemsLlist: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DropdownList;
