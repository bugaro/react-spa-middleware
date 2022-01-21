import { routeName } from '../routeName';
import { TestCaseImpl } from '../testCaseImpl';

export const cases = [
  new TestCaseImpl({ toState: routeName('app'), fromState: routeName(null) }, ['app']),
  new TestCaseImpl({ toState: routeName('app.home'), fromState: routeName(null) }, ['app', 'app.home']),
  new TestCaseImpl({ toState: routeName('app.home.users'), fromState: routeName('app.home.cars') }, ['app.home.users']),
  new TestCaseImpl({ toState: routeName('app.home.users'), fromState: routeName('app') }, [
    'app.home',
    'app.home.users',
  ]),
];
