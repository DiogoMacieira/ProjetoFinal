import { Request, Response } from "express";
import { add } from "../../services/empregado";

export default async (request: Request, response: Response) => {
  const { nome,email,password } = request.body;

  const newempregado = await add(nome,email,password);

  return response.json(newempregado);
};
