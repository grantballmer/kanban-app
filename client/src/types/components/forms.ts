import { Props } from "../props";
import { FieldError } from "../common";

export interface FormType extends Props {
  fields: FieldType[];
  reduxFunc: Function;
  validationFunc: Function;
  redirectPath?: string;
}

export interface FieldType {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  required?: boolean;
}

export interface DynamicFormGroupType {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  required?: boolean;
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  errors: FieldError[];
}

export interface FormBoxType extends Props {
  size: "small" | "medium" | "large";
}
