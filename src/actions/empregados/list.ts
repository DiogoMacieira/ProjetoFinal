import { Request, Response } from "express";
import { all } from "../../services/empregado";

export default async (_: Request, response: Response) => {
  response.json(await all());
};
