import React from "react";
import styles from "./FormBox.module.scss";
import { FormBoxType } from "../../types/components/forms";
import { Props, Text } from "../../types/common";

const FormBox = ({ size, children }: FormBoxType) => {
  return <section className={styles.box}>{children}</section>;
};

const Header = ({ children, className, text }: Text) => {
  return (
    <header className={`${styles.header} ${className}`}>
      {children}
      <h1 className={styles.text}>{text}</h1>
    </header>
  );
};

const Body = ({ children, className }: Props) => {
  return <div className={`${styles.body} ${className}`}>{children}</div>;
};

FormBox.Header = Header;
FormBox.Body = Body;

export default FormBox;
