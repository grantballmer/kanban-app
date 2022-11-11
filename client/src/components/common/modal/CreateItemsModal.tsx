import React, { useState } from "react";
import { MdCreate } from "react-icons/md";
import { CreateItemsModalProps } from "../../../types/components";
import { ButtonProps } from "../../../types/components";

import Modal from "./_Modal";
import Form from "../../form/Form";
import { FIELDS } from "../../../constants/fields";

const CreateItemsModal = ({
  isOpen,
  setIsOpen,
  title,
  fieldsName,
  reduxFunc,
  itemType,
  setSuccess,
}: CreateItemsModalProps) => {
  const [fields, setFields] = useState(FIELDS[fieldsName]);
  const [index, setIndex] = useState(2);

  const addField = () => {
    const capitalize = itemType[0].toUpperCase() + itemType.slice(1);
    setIndex(index + 1);
    return {
      id: `${itemType}-${index}`,
      name: `${itemType}-${index}`,
      type: "text",
      label: `${capitalize} ${index} Name`,
      placeholder: "Type here",
      deletable: true,
    };
  };

  const removeFields = () => {
    setFields(fields.slice(0, fields.length - 1));
    setIndex(index - 1);
  };

  const buttons: ButtonProps[] = [
    {
      type: "button",
      buttonStyle: "primary",
      text: `+ Add New ${itemType}`,
      onClick: () => setFields([...fields, addField()]),
    },
    {
      type: "submit",
      buttonStyle: "primary",
      text: "Submit",
    },
  ];

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Modal.Header title={title}>
        <MdCreate color="white" size={"1.4rem"} />
      </Modal.Header>
      <Modal.Body>
        <Form
          fields={fields}
          reduxFunc={reduxFunc}
          buttons={buttons}
          deleteInputFunc={removeFields}
          validationFunc={() => console.log("here")}
          setSuccess={setSuccess}
        />
      </Modal.Body>
    </Modal>
  );
};

export default CreateItemsModal;
