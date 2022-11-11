export interface BoardsState {
  boards: BoardsType[];
  activeBoard: BoardsType | null;
}

export interface BoardsType {
  id: number;
  title: string;
  userId?: string;
  href: string;
  columns: ColumnType[];
}

export interface ColumnType {
  id: number;
  title: string;
  index: number;
  boardId: number;
  tasks?: TaskType[];
  children?: React.ReactNode;
}

export interface TaskType extends TaskRequest {
  id: number;
}

export interface TaskRequest {
  title: string;
  index: number;
  columnId: number;
}

export interface CreateBoardData {
  board: string;
  column: string;
}

export interface AuthState {
  userId: string | null;
  loading: boolean;
}
