import { AppRoutes } from 'react-spa-middleware';
import { IHomeProps } from './pages/home/home.page';

export const routes: AppRoutes = [
  {
    name: 'home',
    path: '/',
    component: () => import('./pages/home/home.page'),
    resolve: () => {
      return {
        address: Promise.resolve('El street'),
      } as Pick<IHomeProps<Promise<string>>, 'address'>;
    },
  },
  {
    name: 'home.garage',
    /**
     * If first parameter [ / ] in url, no need to add [ / ] for nested view
     * But whan first parameter is relative path like [ /home ] you need add [ /garage ] for nested view
     */
    path: 'garage',
    component: () => import('./pages/garage/garage.page'),
    resolve: () => {
      return {
        size: Promise.resolve(' for two cars'),
      };
    },
  },
];
