import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ResetPasswordService from '@modules/users/services/ResetPasswordService';

export default class SessrionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { token, password } = request.body;

    const restPassword = container.resolve(ResetPasswordService);

    await restPassword.execute({
      token,
      password,
    });

    return response.status(204).json();
  }
}
