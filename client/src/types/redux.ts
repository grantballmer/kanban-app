export interface BoardsState {
  boards: BoardsType[];
}

export interface BoardsType {
  id: number;
  title: string;
  columns: ColumnType[];
}

export interface ColumnType {
  id: number;
  title: string;
  index: number;
  boardId: number;
  tasks?: TaskType[];
}

export interface TaskType {
  id: number;
  title: string;
  index: number;
  columnId: number;
}

export interface CreateBoardData {
  board: string;
  column: string;
}
