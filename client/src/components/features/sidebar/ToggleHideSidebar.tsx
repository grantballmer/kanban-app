import React from "react";
import { BiHide } from "react-icons/bi";

const ToggleHideSidebar = () => {
  return (
    <div className="flex-row align-items-center">
      <BiHide className="margin-right-small" />
      <p>Hide Sidebar</p>
    </div>
  );
};

export default ToggleHideSidebar;
