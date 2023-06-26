import { Request, Response } from "express";
import { detail } from "../../services/reserva";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const reserva = await detail(String(id));

  if (!reserva) {
    return response.status(404).json({
      code: 404,
      message: "Reserva not found",
    });
  }

  return response.json(reserva);
};
