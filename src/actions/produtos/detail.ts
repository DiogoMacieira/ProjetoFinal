import { Request, Response } from "express";
import { detail } from "../../services/produto";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const produto = await detail(String(id));

  if (!produto) {
    return response.status(404).json({
      code: 404,
      message: "Produto not found",
    });
  }

  return response.json(produto);
};
