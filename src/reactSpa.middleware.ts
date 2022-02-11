import { State } from 'router5';
import { DoneFn } from 'router5/dist/types/base';
import { AppRoutes } from './@types/routes.type';
import { componentService } from './component.service';
import { outletService } from './outlet.service';
import { OutletOrderImpl } from './outletOrderImpl';
import { routeService } from './route.service';

export const reactSpaMiddleware =
  (routes: AppRoutes) =>
  () =>
  (toState: State, fromState: State, done: DoneFn): void => {
    const routeNames = routeService.resolveState(toState.name, fromState.name);
    const resolvedRoutes = routeService.getResolvedRoutes(routeNames, routes);

    componentService.getComponent(resolvedRoutes, toState.params).subscribe((component) => {
      const action = outletService.getAction(toState.name, fromState.name);
      const outletName = outletService.resolveOutletName(toState.name, fromState.name);
      const outletOrder = new OutletOrderImpl(action, outletName, component);
      outletService.notifyOutlets(outletOrder);
      done();
    });
  };
