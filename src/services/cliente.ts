import { PrismaClient, Cliente } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.cliente.findMany({
    where: {
      deleted: false,
    },
  });

const add = (
  nome: string,
  email:string,
) =>
  prisma.cliente.create({
    data: {
      nome,
      email,
    },
  });

const remove = (id: string) =>
  prisma.cliente.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

  const update = (id: string, cliente: Cliente) =>
  prisma.cliente.update({
    where: { id },
    data: cliente,
  });

  const detail = (id: string) =>
  prisma.cliente.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

export { all, add, remove,update ,detail};
