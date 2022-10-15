import { Props } from "./props";

export interface ClassName extends Props {
  className?: string;
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

export interface ModalType extends Props {
  isOpen: boolean;
  setIsOpen: Function;
}

export interface ModalHeaderType extends Props {
  title: string;
}

export interface VerticalBoxType extends Props {
  size: "small" | "medium" | "large";
}
