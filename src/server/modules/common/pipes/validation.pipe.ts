import { BadRequestException } from '@nestjs/common';
import {
  Pipe,
  PipeTransform,
  ArgumentMetadata,
} from '@nestjs/common';
import { validate } from 'joi';
import authSchema from '../../auth/schemas/auth.schema';

@Pipe()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const result = validate(value, authSchema);

    if (result.error) {
      const message: string = result.error.details.shift().message;

      throw new BadRequestException(message);
    }

    return result.value;
  }
}