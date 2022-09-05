import "reflect-metadata";
import express from 'express';
import logger from 'morgan';
import { InversifyExpressServer, RoutingConfig } from 'inversify-express-utils';
import "./controllers/greetings-controller";
import start from './start';
import container from "./inversify.container";
import { errorHandler } from "./middlewares/handlers/errors/error-handler";
import { apiNotFoundHandler } from "./middlewares/handlers/api-not-found-handler";

const PORT = 3000;
const LOGGER_CONFIGURATION = 'dev';

const server = new InversifyExpressServer(container, null, { rootPath: '/api' } as RoutingConfig);

server.setConfig((app) => {
  app.use(express.urlencoded({
    extended: true
  }));
  app.use(express.json());
  app.use(logger(LOGGER_CONFIGURATION));
});
const app = server.build();

app.use(errorHandler,
        apiNotFoundHandler);

start(app, PORT);