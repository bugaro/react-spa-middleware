import { AppRoutes } from '../src/@types/routes.type';

type RouteName = Pick<AppRoutes[number], 'name'>;
export function routeName(name: string | null): RouteName {
  name = name ?? '';
  return { name };
}
