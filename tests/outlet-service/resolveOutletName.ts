import { mainOutlet } from '../../src/outlet.service';
import { routeName } from '../routeName';
import { TestCaseImpl } from '../testCaseImpl';

export const cases = [
  new TestCaseImpl({ toState: routeName('app'), fromState: routeName(null) }, mainOutlet),
  new TestCaseImpl({ toState: routeName('app'), fromState: routeName('home') }, mainOutlet),
  new TestCaseImpl({ toState: routeName('app.home'), fromState: routeName('app') }, 'app'),
  new TestCaseImpl({ toState: routeName('app.home'), fromState: routeName('app.users') }, 'app'),
  new TestCaseImpl({ toState: routeName('app.home'), fromState: routeName('app.home.users') }, 'app.home'),
];
