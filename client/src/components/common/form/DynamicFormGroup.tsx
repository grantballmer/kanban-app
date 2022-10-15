import React from "react";
import { DynamicFormGroupType } from "../../../types/components/forms";

const DynamicFormGroup = ({
  id,
  name,
  type,
  value,
  label,
  placeholder,
  required,
  onChangeHandler,
  errors,
}: DynamicFormGroupType) => {
  const error = errors.find((error) => error.field === id);
  return (
    <div className={`form-group ${error ? "has-error" : ""}`}>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChangeHandler}
      />

      <label htmlFor={id}>{label}</label>
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

export default DynamicFormGroup;
