import { Application, Request, Response } from 'express';
import controllers = require('../controllers/controllers');

module.exports = (app: Application) => {
  app.get('/', controllers.home.index);

  app.all('*', (req: Request, res: Response) => {
    res.status(404);
    res.write('404 Not Found');
    res.end();
  });
};
