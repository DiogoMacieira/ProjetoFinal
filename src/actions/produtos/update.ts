import { Request, Response } from "express";
import { update, detail } from "../../services/produto";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(String(id)))) {
    return response.status(404).json({
      code: 404,
      message: "Produto not found",
    });
  }

  const produto = await update(String(id), request.body);

  return response.json(produto);
};
