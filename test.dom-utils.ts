/**
 * This file can be used to define Vitest utils
 */

import { screen } from '@testing-library/dom';

//////////////////////////////////////////////////////////////
export const mockLocationAssign = (href = 'https://localhost') => {
  const assign = vitest.fn();
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: new URL(href),
  });
  window.location.assign = assign;
  return assign;
};

//////////////////////////////////////////////////////////////
export const mockOpen = () => {
  const open = vitest.fn();
  Object.defineProperty(window, 'open', {
    configurable: true,
    value: open,
  });
  return open;
};

//////////////////////////////////////////////////////////////
export const textNoExists = (text: string) => {
  expect(screen.queryByText(text)).toBeNull();
};
