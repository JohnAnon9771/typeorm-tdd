import express, { Express } from 'express';
import { connection } from './database/index';
import routes from './routes';

class App {
  app: Express;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(connection.then());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
