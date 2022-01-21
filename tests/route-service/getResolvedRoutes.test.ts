import { AppRoutes } from '../../src/@types/routes.type';
import { routeService } from '../../src/route.service';
import { cases, routes } from './getResolvedRoutes';

describe('ROUTE SERVICE', () => {
  test('Get one route', () => {
    const test = cases[0];
    const result = routeService.getResolvedRoutes(test.input, routes as AppRoutes);
    expect(result).toEqual(test.output);
  });
  test('Get multiple routes', () => {
    const test = cases[1];
    const result = routeService.getResolvedRoutes(test.input, routes as AppRoutes);
    expect(result).toEqual(test.output);
  });
});
