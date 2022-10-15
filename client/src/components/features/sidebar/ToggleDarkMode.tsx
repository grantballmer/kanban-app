import React, { useState } from "react";
import styles from "./ToggleDarkMode.module.scss";
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs";

const ToggleDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <article
      className={`${styles.wrapper} flex-row align-items-center justify-content-center`}
    >
      <BsSun className="margin-right-default" />
      <div className={styles.container} onClick={() => setDarkMode(!darkMode)}>
        <div
          className={`${styles.toggle} ${
            darkMode ? styles.right : styles.left
          }`}
        ></div>
      </div>
      <BsFillMoonStarsFill className="margin-left-default" />
    </article>
  );
};

export default ToggleDarkMode;
