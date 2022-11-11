import React from "react";
import { DynamicFormGroupType } from "../../types/components/forms";
import { GiCancel } from "react-icons/gi";
import Button from "../common/Button";

const DynamicFormGroup = ({
  id,
  name,
  type,
  value,
  label,
  placeholder,
  required,
  deletable,
  deleteInputFunc,
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

      {deletable && (
        <Button
          type="button"
          buttonStyle="remove-styling"
          className="cancel-button"
          onClick={deleteInputFunc}
        >
          <GiCancel size={"1.2rem"} />
        </Button>
      )}
    </div>
  );
};

export default DynamicFormGroup;
