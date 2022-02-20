import { FC } from 'react';
import { IOutlet } from 'react-spa-middleware';

const Home: FC<IOutlet & IHomeProps<string>> = ({ Outlet, address }) => {
  return (
    <>
      <p>Home on: {address}</p>
      <Outlet />
    </>
  );
};

export default Home;
export interface IHomeProps<address> {
  address: address;
}
