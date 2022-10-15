import React, { useState } from "react";
import styles from "./Home.module.scss";
import SideBar from "../components/dashboard/SideBar";
import TopBar from "../components/dashboard/TopBar";
import Board from "../components/dashboard/Board";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <main className={`${styles.dashboard} new-alt clear-sidebar`}>
      <SideBar className={darkMode ? styles.child : styles["child-light"]} />
      <TopBar className={darkMode ? styles.child : styles["child-light"]} />
      <Board className={darkMode ? styles.child : styles["child-light"]} />
    </main>
  );
};

export default Home;
