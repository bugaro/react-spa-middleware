import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';
import { routes } from './routes';
import { reactSpaMiddleware } from 'react-spa-middleware';

export const initRouter = () => {
  const router = createRouter(routes, {
    defaultRoute: '/',
    queryParamsMode: 'loose',
  });
  router.usePlugin(browserPlugin());
  router.useMiddleware(reactSpaMiddleware(routes));

  return router;
};
