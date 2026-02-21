import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { NextFunction, Request, Response } from 'express';
import { ApplicationError } from '../exceptions/user-http.exception';

type ValidationType = 'body' | 'params';

export function validateDto<T>(dtoClass: new () => T, validationType: ValidationType) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dtoObject = plainToInstance(dtoClass, req[validationType]) as any;

    const errors = await validate(dtoObject, {
      whitelist: true,
      forbidNonWhitelisted: false,
    });

    if (errors.length > 0) {
      throw new ApplicationError(
        errors[0].constraints
          ? Object.values(errors[0].constraints)[0]
          : 'Error de validación, favor revisar los datos ingresados',
        400,
      );
    }

    next();
  };
}
