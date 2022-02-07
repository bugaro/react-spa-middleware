import { FC } from 'react';
import { Route, State } from 'router5';
import { Observable } from 'rxjs';

export type ComponentPromiseType = { default: FC<any> };
interface ExtendedRoutes extends Route {
  component: () => Promise<ComponentPromiseType>;
  resolve?: (param?: Record<string, string>) => Record<string, Observable<any> | Promise<any>>;
}
export type AppRoutes = Array<ExtendedRoutes>;
export interface AppState extends State {
  component: FC<any>;
  resolve?: Record<string, any>;
}
