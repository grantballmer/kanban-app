import React, { useState } from "react";
import styles from "./SideNav.module.scss";
import { Link, useLocation } from "react-router-dom";
import { BsGrid1X2 } from "react-icons/bs";

import Modal from "../../common/modal/_Modal";
import CreateBoardContent from "../../features/sidebar/modal/CreateBoardContent";

const SideNav = () => {
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const links = [
    {
      href: "/",
      text: "Platform Launch",
      isActive: pathname === "/",
    },
    {
      href: "/different",
      text: "Different",
      isActive: pathname === "/different",
    },
    {
      href: "/another",
      text: "Another",
      isActive: pathname === "/another",
    },
  ];

  return (
    <nav className={`${styles["side-nav"]} margin-top-default`}>
      <Modal isOpen={showModal} setIsOpen={setShowModal} className="generic">
        <CreateBoardContent />
      </Modal>

      <ul>
        {links.map((link) => (
          <li
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
          className={`${styles.new} ${styles["nav-item"]} flex-row align-items-center`}
        >
          <BsGrid1X2 className="margin-right-small" color={"#645ec8"} />
          <button
            className="btn btn-remove-styling"
            onClick={() => setShowModal(true)}
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
