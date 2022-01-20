import { AppRoutes } from '../../src/@types/routes.type';
import { mainOutlet } from '../../src/outlet.service';
import { TestCaseImpl } from '../testCaseImpl';

export const cases = [
  new TestCaseImpl({ toState: routeName('app'), fromState: routeName(null)}, mainOutlet),
  new TestCaseImpl({ toState: routeName('app'), fromState: routeName('home') }, mainOutlet),
  new TestCaseImpl({ toState: routeName('app.home'), fromState: routeName('app') }, 'app'),
  new TestCaseImpl({ toState: routeName('app.home'), fromState: routeName('app.users') }, 'app'),
  new TestCaseImpl({ toState: routeName('app.home'), fromState: routeName('app.home.users') }, 'app.home'),
];
type RouteName = Pick<AppRoutes[number], 'name'>;
function routeName(name: string | null): RouteName {
  return { name };
}