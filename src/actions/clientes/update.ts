import { Request, Response } from "express";
import { update, detail } from "../../services/cliente";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(String(id)))) {
    return response.status(404).json({
      code: 404,
      message: "Cliente not found",
    });
  }

  const cliente = await update(String(id), request.body);

  return response.json(cliente);
};
