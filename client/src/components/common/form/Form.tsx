import React, { useState } from "react";
import "./form.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormType, FieldType } from "../../../types/components/forms";

import DynamicFormGroup from "./DynamicFormGroup";

type InitialStateType = { [key: string]: string };

const Form = ({
  fields,
  reduxFunc,
  validationFunc,
  children,
  redirectPath,
}: FormType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  // Set initial state of form input values
  const initialState: InitialStateType = {};

  for (const key of fields) {
    initialState[key.id] = "";
  }

  const [inputField, setInputField] = useState(initialState);

  const inputsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validationFunc(inputField);

    if (validationErrors) {
      setErrors(validationErrors);
    }
    // dispatch(updateLoading(true));
    const response = await dispatch(reduxFunc(inputField));
    // // dispatch(updateLoading(false));
    // if (response.type.includes("fulfilled")) {
    //   navigate({ pathname: redirectPath });
    // }
  };
  const FormGroups = fields.map((field: FieldType, index: number) => (
    <DynamicFormGroup
      key={field.id + index}
      type={field.type}
      id={field.id}
      name={field.name}
      label={field.label}
      placeholder={field.placeholder}
      value={inputField[field.id]}
      required={field.required || false}
      onChangeHandler={inputsHandler}
      errors={errors}
    />
  ));

  return (
    <form onSubmit={handleSubmit}>
      {children}
      {FormGroups}

      <div className="flex-row justify-content-flex-end">
        <button type="submit" className="btn btn-primary btn__full-width">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
