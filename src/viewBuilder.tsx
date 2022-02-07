import React from 'react';
import { IOutlet } from './@types/outlet.type';
import { ViewBuilder } from './component.service';
import { Outlet } from './components/outlet.component';

export const viewBuilder: ViewBuilder = (view, params) => {
  let outlet: JSX.Element;
  if (typeof view !== 'function') {
    outlet = <Outlet name={params.name} />;
  } else {
    outlet = <Outlet name={params.name} routeComponent={view} />;
  }
  const element = <params.component {...params.data} {...({ Outlet: () => outlet } as IOutlet)} />;
  view = () => element;
  return view;
};
