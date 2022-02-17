import { act, render, screen } from '@testing-library/react';
import React, { FC } from 'react';
import { MainOutlet } from '../../src/components/mainOutlet.component';
import { mainOutlet, outletService } from '../../src/outlet.service';
import { OutletOrderImpl } from '../../src/outletOrderImpl';

describe('MAIN OUTLET COMPONENT', () => {
  const Nested: FC = () => <div data-testid="nested">nested</div>;

  test('Main outlet component with child component through data stream', async () => {
    const outletOrder = new OutletOrderImpl('add', mainOutlet, Nested);
    act(() => {
      render(<MainOutlet />);
    });
    act(() => {
      outletService.notifyOutlets(outletOrder);
    });
    const nested = screen.getByTestId('nested');
    expect(nested.textContent).toBe('nested');
  });
});
