import { Application } from 'express';
import { authRoutes } from '@auth/routes/authRoutes';
import { serverAdapter } from '@service/queues/base.queue';

const BASE_PATH='/api/v1'

export default (app: Application) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const routes = () => {
    app.use(BASE_PATH, authRoutes.routes());
    app.use('/queues', serverAdapter.getRouter());
  };
  routes();
};
