import axios from "axios";

class BoardApi {
  static async createBoard(board: string, userId: string) {
    try {
      const response = await axios.post("/board/", {
        title: board,
        userId,
      });

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
}

export default BoardApi;
