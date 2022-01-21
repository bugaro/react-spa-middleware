import { AppRoutes } from '../../src/@types/routes.type';
import { TestCaseImpl } from '../testCaseImpl';

type Route = Pick<AppRoutes[number], 'name'>;
export const routes: Route[] = [{ name: 'app' }, { name: 'app.home' }, { name: 'app.home.users' }];
export const cases = [
  new TestCaseImpl([routes[0].name], [routes[0]]),
  new TestCaseImpl([routes[1].name, routes[2].name], [routes[1], routes[2]]),
];
