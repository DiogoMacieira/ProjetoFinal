import { Request, Response } from "express";
import { detail } from "../../services/menu";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const menu = await detail(String(id));

  if (!menu) {
    return response.status(404).json({
      code: 404,
      message: "Menu not found",
    });
  }

  return response.json(menu);
};
