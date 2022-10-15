import React from "react";
import styles from "./FormBox.module.scss";
import { FormBoxType } from "../../../types/components/forms";
import { Text } from "../../../types/common";
import { Props } from "../../../types/props";

const FormBox = ({ size, children }: FormBoxType) => {
  return <section className={styles.box}>{children}</section>;
};

const Header = ({ children, className, text }: Text) => {
  return (
    <header className={`flex-row align-items-center ${className}`}>
      {children}
      <h1 className={styles.text}>{text}</h1>
    </header>
  );
};

const Body = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>;
};

FormBox.Header = Header;
FormBox.Body = Body;

export default FormBox;
