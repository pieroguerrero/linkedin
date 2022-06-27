import React from "react";
import { MenuBar } from "./components/MenuBar";

const LandingHeader = () => {
  return (
    <header className="w-full">
      <nav className="flex-1 pt-2 pb-2 flex items-center justify-between relative flex-nowrap w-full">
        {/* HorizontalMenu */}
        <div className="flex">
          <div></div>

          <MenuBar />
        </div>
      </nav>
    </header>
  );
};

export { LandingHeader };
