import { Props } from "./props";

export interface ClassName extends Props {
  className?: string;
}

export interface ButtonProps extends ClassName {
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
}

export interface ModalProps extends Props {
  isOpen: boolean;
  setIsOpen: Function;
}

export interface ModalHeaderProps extends Props {
  title: string;
}

export interface VerticalBoxType extends Props {
  size: "small" | "medium" | "large";
}
