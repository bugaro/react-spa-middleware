import { outletService } from '../../src/outlet.service';
import { cases } from './outletAction';

describe('OUTLET SERVICE', () => {
  test(`Return add action if route 'fromState' equals null`, () => {
    const test = cases[0];
    const { toState, fromState } = test.input;

    const result = outletService.getAction(toState.name, fromState.name);
    expect(result).toBe(test.output);
  });
  test(`Return add action if top segments different`, () => {
    const test = cases[1];
    const { toState, fromState } = test.input;

    const result = outletService.getAction(toState.name, fromState.name);
    expect(result).toBe(test.output);
  });
  test(`Return add action for nested view`, () => {
    const test = cases[2];
    const { toState, fromState } = test.input;

    const result = outletService.getAction(toState.name, fromState.name);
    expect(result).toBe(test.output);
  });
  test(`Return add action for nested view when segment different`, () => {
    const test = cases[3];
    const { toState, fromState } = test.input;

    const result = outletService.getAction(toState.name, fromState.name);
    expect(result).toBe(test.output);
  });
  test(`Return delete action for deletion nested view`, () => {
    const test = cases[4];
    const { toState, fromState } = test.input;

    const result = outletService.getAction(toState.name, fromState.name);
    expect(result).toBe(test.output);
  });
});
