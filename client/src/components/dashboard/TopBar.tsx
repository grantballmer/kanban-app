import React, { useState } from "react";
import { DashboardChild } from "../../types/dashboard";
import { BiDotsVerticalRounded } from "react-icons/bi";

import Button from "../common/Button";
import DropdownMenu from "../common/DropdownMenu";

const TopBar = ({ className }: DashboardChild) => {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  return (
    <section
      className={`${className} flex-row align-items-center justify-content-space-between`}
    >
      <h1>Platform Launch</h1>
      <div className="flex-row align-items-center pos-relative">
        {displayDropdown && <DropdownMenu />}

        <button className="btn btn-primary">+ Add New Task</button>
        <Button
          type="button"
          buttonStyle="remove-styling"
          onClick={() => setDisplayDropdown(!displayDropdown)}
        >
          <BiDotsVerticalRounded color="white" size={"2rem"} />
        </Button>
      </div>
    </section>
  );
};

export default TopBar;
