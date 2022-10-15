import React from "react";
import { DynamicFormGroupType } from "../../../types/components/forms";

const DynamicFormGroup = ({
  id,
  name,
  type,
  value,
  label,
  placeholder,
  onChangeHandler,
}: DynamicFormGroupType) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>

      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default DynamicFormGroup;
