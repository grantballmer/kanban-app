import axios from "axios";

export class AuthApi {
  static async createUser(id: string) {
    try {
      const response = await axios.post("/auth/user", {
        id,
      });

      return response;
    } catch (err) {
      console.log(err);
    }
  }

  static async getUserData(id: string) {
    try {
      const response = await axios.get(`/auth/user/${id}`);

      return response;
    } catch (err) {
      console.log(err);
    }
  }
}
