import React from "react";
import ToggleDarkMode from "./ToggleDarkMode";
import ToggleHideSidebar from "./ToggleHideSidebar";

const Toggles = () => {
  return (
    <div className="margin-top-auto">
      <ToggleDarkMode />
      <ToggleHideSidebar />
    </div>
  );
};

export default Toggles;
