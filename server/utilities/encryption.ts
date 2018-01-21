import { randomBytes, createHmac } from 'crypto';

const generateSalt: () => string = () => {
  return randomBytes(128).toString('base64');
};

const generateHashedPassword: (salt: string, password: string) => string = (salt, password) => {
  return createHmac('sha256', salt).update(password).digest('hex');
};

export {
  generateSalt,
  generateHashedPassword
};
