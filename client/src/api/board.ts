import axios from "axios";
import { TaskRequest } from "../types/redux";

class BoardApi {
  static async createBoard(board: string, userId: string, href: string) {
    try {
      const response = await axios.post("/board/", {
        title: board,
        userId,
        href,
      });

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  static async getBoard(boardId: number) {
    try {
      const response = await axios.get(`/board/${boardId}`);

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  static async createColumn(column: string, index: number, boardId: number) {
    try {
      const response = await axios.post(`/board/${boardId}/column`, {
        title: column,
        index,
      });

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  static async createTask({ title, index, columnId }: TaskRequest) {
    try {
      const response = await axios.post(`/board/${columnId}/task`, {
        title,
        index,
      });

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  static async createMultipleTasks(tasks: TaskRequest[], columnId: number) {
    try {
      const response = await axios.post(`/board/${columnId}/tasks`, {
        tasks,
      });

      console.log(response);

      return response;
    } catch (err) {
      console.log(err);
    }
  }
}

export default BoardApi;
