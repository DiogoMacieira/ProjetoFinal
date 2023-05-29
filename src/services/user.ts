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
  idade: string,
  genero: string,
  morada: string,
  contato: string
) =>
  prisma.menu.create({
    data: {
      nome,
      idade,
      genero,
      morada,
      contato,
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
