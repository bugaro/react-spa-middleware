import React, { FC } from 'react';
import { of } from 'rxjs';
import { IOutlet } from '../../src/@types/outlet.type';
import { AppRoutes, ComponentPromiseType } from '../../src/@types/routes.type';
import { TestCaseImpl } from '../testCaseImpl';

const App: FC<IOutlet> = ({ Outlet }) => (
  <div>
    <p data-testid="app">App</p>
    <Outlet />
  </div>
);
const Home: FC<IOutlet> = ({ Outlet }) => (
  <div>
    <p data-testid="home">Home</p>
    <Outlet />
  </div>
);
const Users: FC<IOutlet> = () => (
  <div>
    <p data-testid="users">Users</p>
  </div>
);
const Data: FC<IOutlet & { data: string }> = ({ Outlet, data }) => (
  <div>
    <p data-testid="data">{data}</p>
    <Outlet />
  </div>
);
const Cars: FC<IOutlet & { data: string }> = ({ Outlet, data }) => (
  <div>
    <p data-testid="cars">{data}</p>
    <Outlet />
  </div>
);
export const routes: AppRoutes = [
  {
    name: 'app',
    path: '/',
    component: () => importComponent(App),
  },
  {
    name: 'app.home',
    path: '/home',
    component: () => importComponent(Home),
  },
  {
    name: 'app.home.users',
    path: '/users',
    component: () => importComponent(Users),
  },
  {
    name: 'data',
    path: '/data',
    component: () => importComponent(Data),
    resolve: () => {
      return { data: of('Data') };
    },
  },
  {
    name: 'data.cars',
    path: '/cars/:model',
    component: () => importComponent(Cars),
    resolve: (params) => {
      return { data: Promise.resolve(params.model) };
    },
  },
];
export const cases = [
  new TestCaseImpl({ state: [routes[0]], params: {} }, 'App', { app: 'app' }),
  new TestCaseImpl({ state: routes.slice(0, 3), params: {} }, ['App', 'Home', 'Users'], {
    app: 'app',
    home: 'home',
    users: 'users',
  }),
  new TestCaseImpl({ state: routes.slice(3, routes.length), params: { model: 'bmw' } }, ['Data', 'bmw'], {
    data: 'data',
    cars: 'cars',
  }),
];

function importComponent(component: FC<any>): Promise<ComponentPromiseType> {
  return Promise.resolve({ default: component });
}
