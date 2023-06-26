import { Request, Response } from "express";
import { update, detail } from "../../services/empregado";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(String(id)))) {
    return response.status(404).json({
      code: 404,
      message: "Empregado not found",
    });
  }

  const empregado = await update(String(id), request.body);

  return response.json(empregado);
};
