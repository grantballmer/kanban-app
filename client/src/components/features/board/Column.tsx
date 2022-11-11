import React from "react";
import styles from "./Column.module.scss";
import { ColumnType } from "../../../types/redux";

import {
  Draggable,
  DraggableProvided,
  Droppable,
  DroppableProvided,
} from "@hello-pangea/dnd";
import Heading from "../../common/Heading";
import Card from "./Card";

const Column = ({ data: { id, title, tasks } }: { data: ColumnType }) => {
  const cards = [
    {
      title: "Build UI for onboarding flow",
      subtasks: 3,
      id: "0",
    },
    {
      title: "Build UI for for search",
      subtasks: 2,
      id: "1",
    },
    {
      title: "Build settings UI",
      subtasks: 3,
      id: "2",
    },
    {
      title: "QA and test all major user journeys",
      subtasks: 1,
      id: "3",
    },
  ];
  return (
    <Droppable droppableId={String(id)}>
      {(provided: DroppableProvided) => (
        <section
          className={styles.column}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Heading
            displayDot={true}
            color="turquoise"
            itemNum={4}
            text={title}
            className="margin-bottom-default"
          />

          {/* {provided.placeholder} */}
          {tasks!.map((card, index) => (
            <Card
              key={card.id}
              title={card.title}
              columnId={card.columnId}
              // subtasks={card.subtasks}
              index={index}
              id={card.id}
            />
          ))}
        </section>
      )}
    </Droppable>
  );
};

export default Column;

{
  /* <Draggable draggableId={title} index={index}>
{(provided) => (
  <article
    className={styles.card}
    ref={provided.innerRef}
    {...provided.dragHandleProps}
    {...provided.dragHandleProps}
  >
    <p className="bold-heading">{title}</p>
    <p className="subheading">0 of {subtasks} subtasks</p>
  </article>
)}
</Draggable> */
}
