import React, { useState } from "react";
import styles from "./SideNav.module.scss";
import { Link, useLocation } from "react-router-dom";
import { BsGrid1X2 } from "react-icons/bs";

import Modal from "../../common/modal/_Modal";
import CreateBoardContent from "../../features/sidebar/modal/CreateBoardContent";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const SideNav = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const { boards } = useSelector((state: RootState) => state.boards);

  const links = boards.map((board) => {
    return {
      href: board.href,
      text: board.title,
      isActive: pathname === board.href,
    };
  });

  return (
    <nav className={`${styles["side-nav"]} margin-top-default`}>
      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <CreateBoardContent />
      </Modal>

      <ul>
        {links.map((link) => (
          <li
            key={link.href}
            className={`${styles["nav-item"]} ${
              link.isActive ? styles.active : ""
            } flex-row align-items-center`}
          >
            <BsGrid1X2
              className="margin-right-small"
              color={link.isActive ? "white" : "#989ba7"}
            />
            <Link to={link.href} className={styles.link}>
              {link.text}
            </Link>
          </li>
        ))}

        <li
          className={`${styles["nav-item"]} ${styles["create-new"]} flex-row align-items-center`}
        >
          <BsGrid1X2 className="margin-right-small" color={"#645ec8"} />
          <button
            className="btn btn-remove-styling purple"
            onClick={() => setShowModal(true)}
            tabIndex={0}
          >
            + Create New Board
          </button>
          {/* <p>+ Create New Board</p> */}
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
