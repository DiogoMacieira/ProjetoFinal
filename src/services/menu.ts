import { PrismaClient, Menu } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.menu.findMany({
    where: {
      deleted: false,
    },
  });

const add = (
  nome: string,
  preco: GLfloat,
) =>
  prisma.menu.create({
    data: {
      nome,
      preco,
    },
  });

const remove = (id: string) =>
  prisma.menu.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

  const update = (id: string, menu: Menu) =>
  prisma.menu.update({
    where: { id },
    data: menu,
  });

  const detail = (id: string) =>
  prisma.menu.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

export { all, add, remove,update ,detail};
