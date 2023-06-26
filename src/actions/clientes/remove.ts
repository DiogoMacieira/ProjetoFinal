import { Request, Response } from "express";
import { remove, detail } from "../../services/cliente";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(String(id)))) {
    return response.status(404).json({
      code: 404,
      message: "Cliente not found",
    });
  }

  await remove(String(id));
  return response.json();
};
