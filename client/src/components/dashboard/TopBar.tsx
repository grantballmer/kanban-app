import React, { useState } from "react";
import { DashboardChild } from "../../types/dashboard";
import { BiDotsVerticalRounded } from "react-icons/bi";

import Button from "../common/Button";
import DropdownMenu from "../common/DropdownMenu";
import CreateItemsModal from "../common/modal/CreateItemsModal";
import { createTask } from "../../redux/boards";

const TopBar = ({ className, board }: DashboardChild) => {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      className={`${className} flex-row align-items-center justify-content-space-between`}
    >
      <CreateItemsModal
        isOpen={showModal}
        setIsOpen={setShowModal}
        title="Create New Task"
        fieldsName="CREATE_TASK"
        reduxFunc={createTask}
        itemType="task"
      />
      <h1>{board.title}</h1>
      <div className="flex-row align-items-center pos-relative">
        {displayDropdown && <DropdownMenu />}

        <Button
          type="button"
          buttonStyle="primary"
          onClick={() => setShowModal(!showModal)}
          text="+ Add New Task"
        ></Button>
        <Button
          type="button"
          buttonStyle="remove-styling"
          onClick={() => setDisplayDropdown(!displayDropdown)}
        >
          <BiDotsVerticalRounded color="white" size={"2rem"} />
        </Button>
      </div>
    </section>
  );
};

export default TopBar;
