import React from "react";
import styles from "./VerticalBox.module.scss";
import { VerticalBoxType } from "../../types/components";

const VerticalBox = ({ size, children }: VerticalBoxType) => {
  return (
    <section className={styles.box}>
      <h1>Box</h1>
      {children}
    </section>
  );
};

export default VerticalBox;
