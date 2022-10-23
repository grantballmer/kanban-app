import { prisma } from "../app";

export const createUser = async (id: string) => {
  try {
    const response = await prisma.user.create({
      data: {
        id,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const getUser = async (id: string) => {
  try {
    const response = prisma.user.findUnique({
      where: {
        id,
      },
    });
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};
