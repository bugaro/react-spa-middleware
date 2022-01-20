import { OutletAction } from '../../src/outlet.service';
import { routeName } from '../routeName';
import { TestCaseImpl } from '../testCaseImpl';

export const cases = [
  new TestCaseImpl({ toState: routeName('app'), fromState: routeName(null) }, OutletAction.add),
  new TestCaseImpl({ toState: routeName('app'), fromState: routeName('home') }, OutletAction.add),
  new TestCaseImpl({ toState: routeName('app.home'), fromState: routeName('app') }, OutletAction.add),
  new TestCaseImpl({ toState: routeName('app.home'), fromState: routeName('app.users') }, OutletAction.add),
  new TestCaseImpl({ toState: routeName('app.home'), fromState: routeName('app.home.users') }, OutletAction.delete),
];
