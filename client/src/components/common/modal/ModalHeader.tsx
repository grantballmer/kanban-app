import React from "react";
import { ModalHeaderType } from "../../../types/components";

const ModalHeader = ({ children, title }: ModalHeaderType) => {
  return (
    <header className="flex-row align-items-center border-bottom-white">
      {children}
      <p className={`bold-heading large ${children ? "margin-left-tiny" : ""}`}>
        {title}
      </p>
    </header>
  );
};

export default ModalHeader;
