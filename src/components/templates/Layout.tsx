import React from "react";
import { ContainerTypes } from "../../utils/types.tsx";

const Layout: React.FC<ContainerTypes> = ({ children }) => {
  return (
    <div className="flex w-screen bg-gray-100 justify-center p-5">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
