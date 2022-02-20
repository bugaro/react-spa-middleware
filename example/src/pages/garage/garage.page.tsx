import { FC } from 'react';

const Garage: FC<IGarageProps<string>> = ({ size }) => {
  return (
    <>
      <p>Garage: {size}</p>
    </>
  );
};
export default Garage;
export interface IGarageProps<size> {
  size: size;
}
