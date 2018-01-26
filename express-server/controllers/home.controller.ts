import { Request, Response } from 'express';
import { RequestHandlerParams } from 'express-serve-static-core';

const index: RequestHandlerParams = (req: Request, res: Response) => {
  res.writeHead(200);
  res.write('<h1>this is huge</h1>');
  res.end();
};

const about: RequestHandlerParams = (req: Request, res: Response) => {
  res.writeHead(200);
  res.end();
};

export {
  index,
  about
};
