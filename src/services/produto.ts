import { PrismaClient, Medico } from "@prisma/client";

export const prisma = new PrismaClient();

const all = () =>
  prisma.medico.findMany({
    where: {
      deleted: false,
    },
  });

const add = (
  nome: string,
  especialidade:string,
) =>
  prisma.medico.create({
    data: {
      nome,
      especialidade,
    },
  });

const remove = (id: string) =>
  prisma.medico.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

  const update = (id: string, medico: Medico) =>
  prisma.medico.update({
    where: { id },
    data: medico,
  });

  const detail = (id: string) =>
  prisma.medico.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

export { all, add, remove,update ,detail};
