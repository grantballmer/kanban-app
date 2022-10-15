import React from "react";
import styles from "./Heading.module.scss";
import { HeadingType } from "../../types/components";

const Heading = ({
  displayDot,
  color,
  text,
  itemNum,
  className,
}: HeadingType) => {
  return (
    <div className={`flex-row align-items-center ${className}`}>
      {/* Colored dot beside heading */}
      {displayDot && (
        <span className={`${styles.dot} bg-${color} margin-right-small`}></span>
      )}

      <h2 className={styles.heading}>
        {text} ({itemNum})
      </h2>
    </div>
  );
};

export default Heading;
