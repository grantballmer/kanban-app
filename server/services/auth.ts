import { createUser, getUser } from "../data_access/auth";

export const authService = {
  createUser: async (id: string) => {
    const response = await createUser(id);

    return response;
  },
  getUser: async (id: string) => {
    const response = await getUser(id);

    return response;
  },
};
