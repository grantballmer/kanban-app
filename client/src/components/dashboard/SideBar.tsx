import React from "react";
import { DashboardChild } from "../../types/dashboard";

import Heading from "../common/Heading";
import SideNav from "../navigation/SideNav";
import Toggles from "../features/sidebar/Toggles";

const SideBar = ({ className }: DashboardChild) => {
  return (
    <section className={`${className}`}>
      <header>
        <h1>kanban</h1>
      </header>

      <section className="flex-column">
        <Heading
          displayDot={true}
          color={"turquoise"}
          text={"All Boards"}
          itemNum={8}
        />

        <SideNav />

        <Toggles />
      </section>
    </section>
  );
};

export default SideBar;
