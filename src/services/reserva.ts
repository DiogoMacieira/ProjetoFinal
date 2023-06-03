import { PrismaClient, Reserva } from "@prisma/client";
import dayjs from "dayjs";
export const prisma = new PrismaClient();

const all = () =>
  prisma.reserva.findMany({
    where: {
      deleted: false,
    },
  });

const add = async (
  data: Date,
  numeroPessoas: string,
  nome: string,
  emailId: string,
) => {
  const consulta = await prisma.reserva.create({
    data: {
      data: dayjs(data).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
      NumeroPessoas: numeroPessoas,
      Nome: nome,
      Email:emailId,
    },
  });

  return consulta;
};

const remove = (id: string) =>
  prisma.reserva.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

const update = (id: string, reserva: Reserva) =>
  prisma.reserva.update({
    where: { id },
    data: reserva,
  });

const detail = (id: string) =>
  prisma.reserva.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

export { all, add, remove, update, detail };
