/**
 * This file can be used to define DOM test utils
 */

import { screen } from '@testing-library/dom';

//////////////////////////////////////////////////////////////
export const locationAssignMock = (href = 'https://localhost') => {
  const assign = vi.fn();
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: new URL(href),
  });
  window.location.assign = assign;
  return assign;
};

//////////////////////////////////////////////////////////////
export const openMock = () => {
  const open = vi.fn();
  Object.defineProperty(window, 'open', {
    configurable: true,
    value: open,
  });
  return open;
};

//////////////////////////////////////////////////////////////
export const expectTextNotExist = (text: string) => {
  expect(screen.queryByText(text)).toBeNull();
};
