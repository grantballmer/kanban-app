import React from "react";
import { Props } from "../../types/props";
import styles from "./Logo.module.scss";

const Logo = ({ className }: Props) => {
  return (
    <header className={`flex-row align-items-center ${className}`}>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <p className={styles.title}>kanban</p>
    </header>
  );
};

export default Logo;
