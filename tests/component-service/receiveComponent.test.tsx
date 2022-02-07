import { render, screen } from '@testing-library/react';
import React, { FC } from 'react';
import { componentService } from '../../src/component.service';
import { cases } from './receiveComponent';

describe('COMPONENT SERVICE', () => {
  test('Receive component from single state', async () => {
    const {
      input: { state, params },
      output,
      ids,
    } = cases[0];

    const Component: FC<any> = await new Promise((resolve) => {
      componentService.getComponent(state, params).subscribe((component) => {
        resolve(component);
      });
    });

    render(<Component />);

    const el = screen.getByTestId(ids.app);
    expect(el.textContent).toBe(output);
  });
  test('Receive component with nested view', async () => {
    const {
      input: { state, params },
      output,
      ids,
    } = cases[1];

    const Component: FC<any> = await new Promise((resolve) => {
      componentService.getComponent(state, params).subscribe((component) => {
        resolve(component);
      });
    });

    render(<Component />);

    const app = screen.getByTestId(ids.app);
    const home = screen.getByTestId(ids.home);
    const users = screen.getByTestId(ids.users);
    expect([app.textContent, home.textContent, users.textContent]).toEqual(output);
  });
  test('Receive component with nested view and data resolver', async () => {
    const {
      input: { state, params },
      output,
      ids,
    } = cases[2];

    const Component: FC<any> = await new Promise((resolve) => {
      componentService.getComponent(state, params).subscribe((component) => {
        resolve(component);
      });
    });

    render(<Component />);

    const data = screen.getByTestId(ids.data);
    const cars = screen.getByTestId(ids.cars);
    expect([data.textContent, cars.textContent]).toEqual(output);
  });
});
