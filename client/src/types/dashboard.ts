import { Props } from "./common";
import { BoardsType } from "./redux";

export interface DashboardChild extends Props {
  board: BoardsType;
}
