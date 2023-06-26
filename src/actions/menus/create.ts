import { Request, Response } from "express";
import { add } from "../../services/menu";

export default async (request: Request, response: Response) => {
  const { nome,preco } = request.body;

  const newMenu = await add(nome, preco);

  return response.json(newMenu);
};
