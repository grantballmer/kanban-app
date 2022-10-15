export interface BoardResponse {
  id: string;
  title: string;
}

export interface ColumnResponse {
  id: number;
  title: string;
  boardId: number;
}
