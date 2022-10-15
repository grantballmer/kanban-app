import React from "react";
import { MdCreate } from "react-icons/md";
import { createBoard } from "../../../../redux/boards";

import ModalHeader from "../../../common/modal/ModalHeader";
import ModalBody from "../../../common/modal/ModalBody";
import Form from "../../../common/form/Form";
import { FIELDS } from "../../../../constants/fields";

const CreateBoardContent = () => {
  return (
    <React.Fragment>
      <ModalHeader title={"Create A New Board"}>
        <MdCreate color="white" />
      </ModalHeader>
      <ModalBody>
        <Form
          fields={FIELDS.CREATE_BOARD}
          reduxFunc={createBoard}
          validationFunc={() => console.log("here")}
        />
      </ModalBody>
    </React.Fragment>
  );
};

export default CreateBoardContent;
