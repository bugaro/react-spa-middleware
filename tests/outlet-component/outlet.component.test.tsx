import { act, render, screen } from '@testing-library/react';
import React, { FC } from 'react';
import { Outlet } from '../../src/components/outlet.component';
import { outletService } from '../../src/outlet.service';
import { OutletOrderImpl } from '../../src/outletOrderImpl';

describe('OUTLET COMPONENT', () => {
  const Nested: FC = () => <div data-testid="nested">nested</div>;

  test('Outlet component with child component through props', () => {
    render(<Outlet name="" routeComponent={Nested} />);
    const nested = screen.getByTestId('nested');
    expect(nested.textContent).toBe('nested');
  });

  test('Outlet component with child component through data stream', async () => {
    const outletName = 'users.user';
    const outletOrder = new OutletOrderImpl('add', outletName, Nested);

    act(() => {
      render(<Outlet name={outletName} />);
    });
    act(() => {
      outletService.notifyOutlets(outletOrder);
    });
    const nested = screen.getByTestId('nested');
    expect(nested.textContent).toBe('nested');
  });
});
