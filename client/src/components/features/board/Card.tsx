import React from "react";
import styles from "./Card.module.scss";
import { Draggable } from "@hello-pangea/dnd";
import { TaskType } from "../../../types/redux";

const Card = ({ title, id, index }: TaskType) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <article
          className={styles.card}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="bold-heading">{title}</p>
          {/* <p className="subheading">0 of {subtasks} subtasks</p> */}
        </article>
      )}
    </Draggable>
  );
};

export default Card;
