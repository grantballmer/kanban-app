import React, { useState } from "react";
import { MdCreate } from "react-icons/md";
import { createBoard } from "../../../../redux/boards";
import { ButtonProps } from "../../../../types/components";

import Modal from "../../../common/modal/_Modal";
import Form from "../../../form/Form";
import { FIELDS } from "../../../../constants/fields";

const CreateBoardContent = () => {
  const [fields, setFields] = useState(FIELDS.CREATE_BOARD);

  const addColumnField = () => {
    return {
      id: `column-${fields.length}`,
      name: `column-${fields.length}`,
      type: "text",
      label: `Column ${fields.length} Name`,
      placeholder: "Type here",
      deletable: true,
    };
  };

  const removeField = () => {
    setFields(fields.slice(0, fields.length - 1));
  };

  const buttons: ButtonProps[] = [
    {
      type: "button",
      buttonStyle: "primary",
      text: "+ Add New Column",
      onClick: () => setFields([...fields, addColumnField()]),
    },
    {
      type: "submit",
      buttonStyle: "primary",
      text: "Submit",
    },
  ];

  return (
    <React.Fragment>
      <Modal.Header title={"Create A New Board"}>
        <MdCreate color="white" size={"1.4rem"} />
      </Modal.Header>
      <Modal.Body>
        <Form
          fields={fields}
          reduxFunc={createBoard}
          buttons={buttons}
          deleteInputFunc={removeField}
          validationFunc={() => console.log("here")}
        />
      </Modal.Body>
    </React.Fragment>
  );
};

export default CreateBoardContent;
