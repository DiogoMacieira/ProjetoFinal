import { Request, Response } from "express";
import { detail } from "../../services/cliente";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const cliente = await detail(String(id));

  if (!cliente) {
    return response.status(404).json({
      code: 404,
      message: "Cliente not found",
    });
  }

  return response.json(cliente);
};
