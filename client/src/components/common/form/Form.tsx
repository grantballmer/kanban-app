import React, { useState } from "react";
import "./form.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormType, FieldType } from "../../../types/components/forms";

import DynamicFormGroup from "./DynamicFormGroup";

type InitialStateType = { [key: string]: string };

const Form = ({ fields, reduxFunc, children, redirectPath }: FormType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

    // dispatch(updateLoading(true));
    const response = await dispatch(reduxFunc(inputField));
    // dispatch(updateLoading(false));
    if (response.type.includes("fulfilled")) {
      navigate({ pathname: redirectPath });
    }
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
      onChangeHandler={inputsHandler}
    />
  ));

  return (
    <form onSubmit={handleSubmit}>
      {children}
      {FormGroups}

      <button type="submit" className="btn btn__primary btn__full-width">
        Submit
      </button>
    </form>
  );
};

export default Form;
