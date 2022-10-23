import React from "react";
import "./modal.scss";
import Modal from "react-modal";
import { ModalHeaderProps, ModalProps } from "../../../types/components";
import { Props } from "../../../types/props";

Modal.setAppElement("#root");

const _Modal = ({ isOpen, setIsOpen, children, className }: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      className={`modal ${className}`}
      shouldCloseOnOverlayClick={true}
      overlayClassName={"ReactModal__Overlay"}
    >
      {children}
    </Modal>
  );
};

const Header = ({ children, title }: ModalHeaderProps) => {
  return (
    <header className="flex-row align-items-center margin-bottom-default">
      {children}
      <p className={`bold-heading large ${children ? "margin-left-tiny" : ""}`}>
        {title}
      </p>
    </header>
  );
};

const Body = ({ children }: Props) => {
  return <section>{children}</section>;
};

_Modal.Header = Header;
_Modal.Body = Body;

export default _Modal;
