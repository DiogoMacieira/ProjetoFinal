import { Request, Response } from "express";
import { update, detail } from "../../services/reserva";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(String(id)))) {
    return response.status(404).json({
      code: 404,
      message: "Reserva not found",
    });
  }

  const reserva = await update(String(id), request.body);

  return response.json(reserva);
};
