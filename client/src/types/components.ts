import { DraggableProvided } from "react-beautiful-dnd";
import { FIELDS } from "../constants/fields";
import { Props } from "./common";
import { FieldType } from "./components/forms";

export interface ButtonProps extends Props {
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  buttonStyle?: "primary" | "secondary" | "remove-styling";
  text?: string;
  isLoading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface HeadingType extends Props {
  displayDot: boolean;
  color?: string;
  text: string;
  itemNum: number;
}

export interface DotType {
  displayDot: boolean;
  color?: string;
}

export interface CardType {
  title: string;
  subtasks: number;
  index: number;
  id: number;
}

export interface ModalProps extends Props {
  isOpen: boolean;
  setIsOpen: Function;
}

export interface ModalHeaderProps extends Props {
  title: string;
}

export interface CreateItemsModalProps extends ModalProps {
  title: string;
  fieldsName: keyof typeof FIELDS;
  // fieldsInitialValue: FieldType[] | keyof typeof FIELDS;
  reduxFunc: Function;
  itemType: string;
  setSuccess?: Function;
}

export interface VerticalBoxType extends Props {
  size: "small" | "medium" | "large";
}
