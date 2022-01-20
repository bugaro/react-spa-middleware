import { outletService } from '../../src/outlet.service';
import { cases } from './resolveOutletName';

describe('OUTLET SERVICE', () => {
  test(`Return main outlet name if route 'fromState' equals null`, () => {
    const test = cases[0];
    const { toState, fromState } = test.input;

    const result = outletService.resolveOutletName(toState.name, fromState.name);
    expect(result).toBe(test.output);
  });
  test(`Return main outlet name if top segments different`, () => {
    const test = cases[1];
    const { toState, fromState } = test.input;

    const result = outletService.resolveOutletName(toState.name, fromState.name);
    expect(result).toBe(test.output);
  });
  test(`Outlet name for nested view`, () => {
    const test = cases[2];
    const { toState, fromState } = test.input;

    const result = outletService.resolveOutletName(toState.name, fromState.name);
    expect(result).toBe(test.output);
  });
  test(`Outlet name for nested view when segment different`, () => {
    const test = cases[3];
    const { toState, fromState } = test.input;

    const result = outletService.resolveOutletName(toState.name, fromState.name);
    expect(result).toBe(test.output);
  });
  test(`Outlet name for deletion nested view`, () => {
    const test = cases[4];
    const { toState, fromState } = test.input;

    const result = outletService.resolveOutletName(toState.name, fromState.name);
    expect(result).toBe(test.output);
  });
});
