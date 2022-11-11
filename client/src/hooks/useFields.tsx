import React, { useState } from "react";
import { FIELDS } from "../constants/fields";

type FieldsNameType = {
  fieldsName:
    | "CREATE_BOARD"
    | "CREATE_TASK"
    | "LOGIN"
    | "SIGNUP"
    | "JOIN_TEAM"
    | "CREATE_TEAM";
  itemType: string;
};

const useFields = ({ fieldsName, itemType }: FieldsNameType) => {
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

  const removeField = () => {
    setFields(fields.slice(0, fields.length - 1));
    setIndex(index - 1);
  };

  return [
    fields,
    {
      setAddField: addField,
      setRemoveField: removeField,
    },
  ];
};

export default useFields;
