import React from "react";
import { Props } from "../../../types/props";

const ModalBody = ({ children }: Props) => {
  return (
    <section>
      <h1>Body</h1>
      {children}
    </section>
  );
};

export default ModalBody;
