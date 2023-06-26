import { Request, Response } from "express";
import { all } from "../../services/produto";

export default async (_: Request, response: Response) => {
  response.json(await all());
};
