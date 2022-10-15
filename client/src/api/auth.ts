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
}
