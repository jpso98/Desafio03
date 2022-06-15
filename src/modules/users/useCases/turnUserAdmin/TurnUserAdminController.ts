import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;

      this.turnUserAdminUseCase.execute({ user_id });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: Error });
    }
  }
}

export { TurnUserAdminController };
