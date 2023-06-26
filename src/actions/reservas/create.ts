import { Request, Response } from "express";
import { add } from "../../services/reserva";

export default async (request: Request, response: Response) => {
  const { nome,email,numeroPessoas,data} = request.body;

  const newReserva = await add(nome,email,numeroPessoas,data);

  return response.json(newReserva);
};
