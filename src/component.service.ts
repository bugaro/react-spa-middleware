import { FC } from 'react';
import { combineLatestWith, concatAll, filter, forkJoin, from, map, of, reduce } from 'rxjs';
import { AppRoutes, ComponentPromiseType } from './@types/routes.type';
import { Noop } from './components/noop.component';
import { viewBuilder } from './viewBuilder';
import { ViewParamsImpl } from './viewParamsImpl';

class ComponentService {
  private EMPTY = '__EMPTY__';
  private dataNoop = { [this.EMPTY]: of(this.EMPTY) };
  private vb: ViewBuilder;

  constructor(vb: ViewBuilder) {
    this.vb = vb;
  }

  getComponent(routes: AppRoutes, param: Record<string, string> = {}) {
    const routesReversed = routes.reverse();

    return from(routesReversed)
      .pipe(
        map((route) => {
          const { component, resolve } = route;
          const data = typeof resolve === 'function' ? resolve(param) : this.dataNoop;
          const componentPromise = this.getComponentPromise(component);

          return from(componentPromise).pipe(combineLatestWith(forkJoin(data), of(route.name)));
        }),
        concatAll(),
      )
      .pipe(
        map(([component, data, name]) => {
          const d = data[this.EMPTY] === this.EMPTY ? {} : data;
          return new ViewParamsImpl(component.default, d, name);
        }),
        reduce<IViewParams, FC<any>>((acc, view) => {
          return this.vb(acc as FC<any>, view);
        }, undefined!),
        filter<FC<any>>((value) => typeof value === 'function'),
      );
  }
  private getComponentPromise(
    component: AppRoutes[number]['component'],
  ): ReturnType<AppRoutes[number]['component']> {
    return typeof component === 'function'
      ? component()
      : Promise.resolve({ default: Noop } as ComponentPromiseType);
  }
}
export const componentService = new ComponentService(viewBuilder);

export interface IViewParams {
  component: FC<any>;
  data: Record<string, any>;
  name: string;
}
export type ViewBuilder = (view: FC<any> | undefined, params: IViewParams) => FC<any>;
