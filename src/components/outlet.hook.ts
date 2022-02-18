import { FC, useEffect, useState } from 'react';
import { filter } from 'rxjs';
import { OutletAction, outletService } from '../outlet.service';
import { Noop } from './noop.component';

export function useOutlet(name: string, routeComponent: FC | undefined): IUseOutlet {
  const component = getComponent(routeComponent);
  const [Component, setComponent] = useState<FC>(component);

  useEffect(() => {
    const sub = outletService
      .dataStream()
      .pipe(filter((v) => v.outletName === name))
      .subscribe((outletOrder) => {
        const { action } = outletOrder;
        if (action === OutletAction.delete) {
          setComponent(() => Noop);
        }
        const { component: nested } = outletOrder;
        if (action === OutletAction.add) {
          setComponent(() => nested as FC<any>);
        }
      });
    return () => {
      sub.unsubscribe();
    };
  }, []);

  return { Component };
}
interface IUseOutlet {
  Component: FC<any>;
}
function getComponent(routeComponent: FC | undefined) {
  const component = typeof routeComponent === 'function' ? routeComponent : Noop;
  return () => component;
}
