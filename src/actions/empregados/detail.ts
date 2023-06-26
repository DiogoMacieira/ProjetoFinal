import { Request, Response } from "express";
import { detail } from "../../services/empregado";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const empregado = await detail(String(id));

  if (!empregado) {
    return response.status(404).json({
      code: 404,
      message: "Empregado not found",
    });
  }

  return response.json(empregado);
};
