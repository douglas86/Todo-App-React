import React from "react";
import { ContainerTypes } from "../../utils/types.tsx";

const Layout: React.FC<ContainerTypes> = ({ children }) => {
  return (
    <div className="w-screen min-h-screen bg-gray-100 justify-center p-5">
      <div className="flex justify-center">{children}</div>
    </div>
  );
};

export default Layout;
