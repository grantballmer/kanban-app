export interface SchemaType {
  title: string;
}

export interface ChildSchemaType extends SchemaType {
  index: number;
}

export interface ColumnSchema extends ChildSchemaType {
  boardId: number;
}

export interface TaskSchema extends ChildSchemaType {
  columnId: number;
}
