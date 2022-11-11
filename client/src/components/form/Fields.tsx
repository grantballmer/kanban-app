import React from "react";
import { FieldType } from "../../types/components/forms";
import { FIELD_TYPES } from "../../constants/fields";

const Fields = () => {
  // const FieldGroups = fields.map((field: FieldType, index: number) => {
  //   switch (field.type) {
  //     case FIELD_TYPES.RADIO:
  //       return <Radio />;
  //     default:
  //       return (
  //         <DynamicFormGroup
  //           key={field.id + index}
  //           type={field.type}
  //           id={field.id}
  //           name={field.name}
  //           label={field.label}
  //           placeholder={field.placeholder}
  //           value={inputField[field.id]}
  //           required={field.required || false}
  //           deletable={field.deletable}
  //           deleteInputFunc={deleteInputFunc}
  //           onChangeHandler={inputsHandler}
  //           errors={errors}
  //         />
  //       );
  //   }
  // });
  // return FieldGroups;

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Fields;
