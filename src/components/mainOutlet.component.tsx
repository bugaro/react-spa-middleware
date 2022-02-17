import React, { FC } from 'react';
import { mainOutlet } from '../outlet.service';
import { useOutlet } from './outlet.hook';

export const MainOutlet: FC = () => {
  const { Component } = useOutlet(mainOutlet, undefined);

  return <Component />;
};
