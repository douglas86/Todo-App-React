import { roundButton } from "../atoms/buttons.tsx";
import { leftArrowIcon } from "../atoms/icons/iconsFa.tsx";
import { pageTitle } from "../atoms/elements.tsx";

const PageHeader = ({ title }: { title: string }) => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="flex">
      <a href="/">{roundButton(10, leftArrowIcon(), () => handleClick())}</a>
      {pageTitle(title)}
    </div>
  );
};

export default PageHeader;
