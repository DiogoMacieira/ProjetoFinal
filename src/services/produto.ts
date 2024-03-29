import { PrismaClient, Produtos } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.produtos.findMany({
    where: {
      deleted: false,
    },
  });

const add = (
  nome: string,
  descricao:string,
  menuId:string,
) =>
  prisma.produtos.create({
    data: {
      nome,
      descricao,
      menuId,
    },
  });

const remove = (id: string) =>
  prisma.produtos.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

  const update = (id: string, produtos: Produtos) =>
  prisma.produtos.update({
    where: { id },
    data: produtos,
  });

  const detail = (id: string) =>
  prisma.produtos.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

export { all, add, remove,update ,detail};
