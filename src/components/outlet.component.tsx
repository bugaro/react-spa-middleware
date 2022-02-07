import React, { FC } from 'react';
import { useOutlet } from './outlet.hook';

export const Outlet: FC<IOutletProps> = ({ name, routeComponent }) => {
  const { Component } = useOutlet(name, routeComponent);

  return <Component />;
};
interface IOutletProps {
  name: string;
  routeComponent?: FC<any>;
}
