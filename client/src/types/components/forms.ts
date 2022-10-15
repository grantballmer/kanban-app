import { Props } from "../props";

export interface FormType extends Props {
  fields: FieldType[];
  reduxFunc: Function;
  redirectPath?: string;
}

export interface FieldType {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

export interface DynamicFormGroupType {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
}
