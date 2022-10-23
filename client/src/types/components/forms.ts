import { Props } from "../props";
import { FieldError } from "../common";
import { ButtonProps } from "../components";

export interface FormType extends Props {
  fields: FieldType[];
  reduxFunc: Function;
  redirectPath?: string;
  validationFunc: Function;
  buttons?: ButtonProps[];
  setSuccess?: Function;
  deleteInputFunc?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface FieldType {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  deletable?: boolean;
  deleteInputFunc?: React.MouseEventHandler<HTMLButtonElement>;
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
  deletable?: boolean;
  deleteInputFunc?: React.MouseEventHandler<HTMLButtonElement>;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  errors: FieldError[];
}

export interface FormBoxType extends Props {
  size: "small" | "medium" | "large";
}
