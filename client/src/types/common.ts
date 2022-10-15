import { Props } from "./props";

export interface Text extends Props {
  text: string;
}

export interface FieldError {
  field: string;
  message: string;
}
