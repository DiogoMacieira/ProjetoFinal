import { PrismaClient, Empregado } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.empregado.findMany({
    where: {
      deleted: false,
    },
  });

const add = (
  nome: string,
  email:string,
  password:string,
) =>
  prisma.empregado.create({
    data: {
      nome,
      email,
      password,
    },
  });

const remove = (id: string) =>
  prisma.empregado.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

  const update = (id: string, empregado: Empregado) =>
  prisma.empregado.update({
    where: { id },
    data: empregado,
  });

  const detail = (id: string) =>
  prisma.empregado.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

export { all, add, remove,update ,detail};
