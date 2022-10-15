import React from "react";
import styles from "./Column.module.scss";
import Heading from "../../common/Heading";
import Card from "./Card";

const Column = () => {
  return (
    <section className={styles.column}>
      <Heading
        displayDot={true}
        color="turquoise"
        itemNum={4}
        text="Todo"
        className="margin-bottom-default"
      />

      <Card title="Build UI for onboarding flow" subtasks={3} />
      <Card title="Build UI for for search" subtasks={1} />
      <Card title="Build settings UI" subtasks={2} />
      <Card title="QA and test all major user journeys" subtasks={2} />
    </section>
  );
};

export default Column;
