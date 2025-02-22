import { roundButton } from "../atoms/buttons.tsx";
import { leftArrowIcon } from "../atoms/icons.tsx";
import { pageTitle } from "../atoms/elements.tsx";

const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex">
      <a href="/">{roundButton(10, leftArrowIcon())}</a>
      {pageTitle(title)}
    </div>
  );
};

export default PageHeader;
