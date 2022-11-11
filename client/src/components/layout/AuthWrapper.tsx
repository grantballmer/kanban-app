import React from "react";
import styles from "./AuthWrapper.module.scss";
import { Props } from "../../types/common";

const AuthWrapper = ({ children }: Props) => {
  return <main className={styles.wrapper}>{children}</main>;
};

export default AuthWrapper;
