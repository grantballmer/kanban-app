import React, { useState } from "react";
import "./form.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormType, FieldType } from "../../types/components/forms";

import DynamicFormGroup from "./DynamicFormGroup";
import Button from "../common/Button";
import { FIELD_TYPES } from "../../constants/fields";
import Radio from "./fields/Radio";

type InitialStateType = { [key: string]: string };

const Form = ({
  fields,
  reduxFunc,
  validationFunc,
  children,
  buttons,
  redirectPath,
  setSuccess,
  deleteInputFunc,
}: FormType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);

    const validationErrors = validationFunc(inputField);

    if (validationErrors) {
      setErrors(validationErrors);
    }

    try {
      const response = await dispatch(reduxFunc(inputField));
      setIsSubmitting(false);

      if (setSuccess) {
        setSuccess(true);
      }

      if (response.type.includes("fulfilled") && redirectPath) {
        setTimeout(
          () => {
            navigate({ pathname: redirectPath });
          },
          setSuccess ? 1500 : 10
        );
      }
    } catch (err) {
      setIsSubmitting(false);
      console.log(err);
    }
  };
  const FormGroups = fields.map((field: FieldType, index: number) => {
    switch (field.type) {
      case FIELD_TYPES.RADIO:
        return <Radio />;
      default:
        return (
          <DynamicFormGroup
            key={field.id + index}
            type={field.type}
            id={field.id}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            value={inputField[field.id]}
            required={field.required || false}
            deletable={field.deletable}
            deleteInputFunc={deleteInputFunc}
            onChangeHandler={inputsHandler}
            errors={errors}
          />
        );
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      {children}
      {FormGroups}

      <div
        className={`flex-row justify-content-${
          buttons && buttons.length > 1 ? "space-between" : "flex-end"
        }`}
      >
        {buttons &&
          buttons.map((button) => (
            <Button
              type={button.type}
              buttonStyle={button.buttonStyle}
              text={button.text}
              onClick={button.onClick}
              isLoading={button.type === "submit" ? isSubmitting : false}
            />
          ))}

        {!buttons && (
          <Button
            type={"submit"}
            buttonStyle={"primary"}
            text={"Submit"}
            isLoading={isSubmitting}
          />
        )}
      </div>
    </form>
  );
};

export default Form;
