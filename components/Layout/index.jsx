import React from "react";
import Aside from "../Aside";

const Layout = ({ children }) => {
  return (
    <>
      <main className="w-full h-full relative grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        <div className="col-span-1 lg:col-span-7 w-full hidden lg:block ">
          <Aside />
        </div>
        <div className="col-span-1 lg:col-span-5 overflow-hidden  relative w-full z-40 h-full ">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
