import React from "react";
import styles from "./Card.module.scss";
import { CardType } from "../../../types/components";

const Card = ({ title, subtasks }: CardType) => {
  return (
    <article className={styles.card}>
      <p className="bold-heading">{title}</p>
      <p className="subheading">0 of {subtasks} subtasks</p>
    </article>
  );
};

export default Card;
