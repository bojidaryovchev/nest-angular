import { BadRequestException } from '@nestjs/common';
import {
  Pipe,
  PipeTransform,
  ArgumentMetadata,
} from '@nestjs/common';
import { validate } from 'joi';
import authSchema from '../../auth/schemas/auth.schema';
import { replace } from '../../../utilities/helpers';

@Pipe()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const result = validate(value, authSchema);

    if (result.error) {
      const errorMessage = result.error.details.shift().message;
      const message: string = replace(errorMessage, /["]/g, '');

      throw new BadRequestException(`Validation failed: ${message}`);
    }

    return result.value;
  }
}