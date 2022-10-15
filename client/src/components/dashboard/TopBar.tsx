import React from "react";
import { DashboardChild } from "../../types/dashboard";

const TopBar = ({ className }: DashboardChild) => {
  return (
    <section
      className={`${className} flex-row align-items-center justify-content-space-between`}
    >
      <h1>Platform Launch</h1>
      <button className="btn btn-primary">+ Add New Task</button>
    </section>
  );
};

export default TopBar;
