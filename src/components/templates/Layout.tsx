import React, { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Layout: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="flex w-screen h-screen bg-gray-100 justify-center p-5">
      <div>{children}</div>
    </div>
  );
};

export default Layout;
