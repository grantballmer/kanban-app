import React, { useState } from "react";
import styles from "./Column.module.scss";
import { createColumn } from "../../../redux/boards";

import CreateItemsModal from "../../common/modal/CreateItemsModal";

const AddColumn = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <React.Fragment>
      <CreateItemsModal
        isOpen={showModal}
        setIsOpen={setShowModal}
        title="Create New Column"
        fieldsName="CREATE_COLUMN"
        reduxFunc={createColumn}
        itemType="task"
        setSuccess={() => setShowModal(false)}
      />
      <section
        className={`${styles.column} ${styles["add-column"]}`}
        onClick={() => setShowModal(!showModal)}
      >
        + Add Column
      </section>
    </React.Fragment>
  );
};

export default AddColumn;
