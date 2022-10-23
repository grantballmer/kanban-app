import React from "react";
import styles from "./DropdownMenu.module.scss";
import { logout } from "../../redux/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

const DropdownMenu = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = async () => {
    await dispatch(logout());
  };

  return (
    <div className={styles.dropdown}>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li onClick={handleClick}>logout</li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
