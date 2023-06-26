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
  nome: string,
  email: string,
  numeroPessoas: string,
  data: Date,
) => {
  const consulta = await prisma.reserva.create({
    data: {
      nome: nome,
      email: {
        create: {
          nome: nome,
          email: email,
        },
      },
      numeroPessoas: numeroPessoas,
      data: dayjs(data).format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
    },
  });

  return consulta;
};

export default add;

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
