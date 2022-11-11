export interface BoardResponse {
  id: string;
  title: string;
  href: string;
  columns?: ColumnResponse[];
}

export interface ColumnResponse {
  id: number;
  title: string;
  boardId: number;
  tasks?: TaskResponse[];
}

export interface TaskResponse {
  title: string;
  index: number;
  column_id: number;
}

export interface TaskRequest {
  title: string;
  index: number;
  column_id: number;
}
