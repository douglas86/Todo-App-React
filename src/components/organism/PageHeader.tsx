import { roundButton } from "../atoms/buttons.tsx";
import { leftArrowIcon } from "../atoms/icons/iconsFa.tsx";
import { pageTitle } from "../atoms/elements.tsx";
import { ChangeEvent } from "react";

const PageHeader = ({ title }: { title: string }) => {
  const handleClick = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    window.location.href = "/";
  };

  return (
    <div className="flex justify-center items-center mx-5">
      <a href="/" className="mr-3">
        {roundButton(10, leftArrowIcon(), () => handleClick)}
      </a>
      {pageTitle(title)}
    </div>
  );
};

export default PageHeader;
