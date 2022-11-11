import React, { useState } from "react";
import styles from "./Home.module.scss";
import SideBar from "../components/dashboard/SideBar";
import TopBar from "../components/dashboard/TopBar";
import Board from "../components/dashboard/Board";
import { useActionData, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import useActiveBoard from "../hooks/useActiveBoard";

const Home = () => {
  const params = useParams();
  const [darkMode, setDarkMode] = useState(true);
  const { boards } = useSelector((state: RootState) => state.boards);
  const board = useActiveBoard();

  // const board = params.id
  //   ? boards.find((board) => String(board.id) === params.id)
  //   : boards[0];

  return (
    <main className={`${styles.dashboard} new-alt clear-sidebar`}>
      {board && (
        <>
          <SideBar
            className={darkMode ? styles.child : styles["child-light"]}
            board={board}
          />
          <TopBar
            className={darkMode ? styles.child : styles["child-light"]}
            board={board}
          />
          <Board
            className={darkMode ? styles.child : styles["child-light"]}
            board={board}
          />
        </>
      )}
    </main>
  );
};

export default Home;
