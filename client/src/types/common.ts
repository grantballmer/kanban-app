export interface Props {
  children?: React.ReactNode;
  className?: string;
}

export interface Text extends Props {
  text: string;
}

export interface FieldError {
  field: string;
  message: string;
}
