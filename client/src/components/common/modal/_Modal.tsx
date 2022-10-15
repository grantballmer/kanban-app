import React from "react";
import "./modal.scss";
import Modal from "react-modal";
import { ModalType } from "../../../types/components";

Modal.setAppElement("#root");

const _Modal = ({ isOpen, setIsOpen, children, className }: ModalType) => {
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

export default _Modal;
