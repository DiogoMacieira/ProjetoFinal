import { Request, Response } from "express";
import { add } from "../../services/produto";

export default async (request: Request, response: Response) => {
  const { nome,descricao,menu } = request.body;

  const newProduto = await add(nome,descricao,menu);

  return response.json(newProduto);
};
