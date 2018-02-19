import { object, string, ObjectSchema } from 'joi';

export const authUserSchema: ObjectSchema = object({
  email: string().email().required(),
  password: string().alphanum().min(6).max(36).required()
});