import React from "react";
import { DashboardChild } from "../../types/dashboard";

import Heading from "../common/Heading";
import Logo from "../common/Logo";
import SideNav from "../features/sidebar/SideNav";
import Toggles from "../features/sidebar/Toggles";

const SideBar = ({ className }: DashboardChild) => {
  return (
    <section className={`${className}`}>
      <Logo className="padding-all-default" />

      <section className="flex-column padding-all-default">
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
