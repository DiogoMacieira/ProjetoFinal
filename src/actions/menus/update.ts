import { Request, Response } from "express";
import { update, detail } from "../../services/menu";

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  if (!(await detail(String(id)))) {
    return response.status(404).json({
      code: 404,
      message: "Menu not found",
    });
  }

  const menu = await update(String(id), request.body);

  return response.json(menu);
};
