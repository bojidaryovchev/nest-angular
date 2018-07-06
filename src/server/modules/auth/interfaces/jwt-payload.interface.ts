export interface IJwtPayload {
  readonly sub: string;
  readonly iat: number;
  readonly exp: number;
};
