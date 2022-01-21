import { routeService } from '../../src/route.service';
import { cases } from './resolveState';

describe('ROUTE SERVICE', () => {
  test('Resolve first load top segment', () => {
    const test = cases[0];
    const { toState, fromState } = test.input;

    const result = routeService.resolveState(toState.name, fromState.name);
    expect(result).toEqual(test.output);
  });
  test('Resolve first load nested view', () => {
    const test = cases[1];
    const { toState, fromState } = test.input;

    const result = routeService.resolveState(toState.name, fromState.name);
    expect(result).toEqual(test.output);
  });
  test('Resolve state if segment different', () => {
    const test = cases[2];
    const { toState, fromState } = test.input;

    const result = routeService.resolveState(toState.name, fromState.name);
    expect(result).toEqual(test.output);
  });
  test('Resolve navigation to nested view', () => {
    const test = cases[3];
    const { toState, fromState } = test.input;

    const result = routeService.resolveState(toState.name, fromState.name);
    expect(result).toEqual(test.output);
  });
});
