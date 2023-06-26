import { Request, Response } from "express";
import { add } from "../../services/cliente";

export default async (request: Request, response: Response) => {
  const { nome,email } = request.body;

  const newCliente = await add(nome,email);

  return response.json(newCliente);
};
