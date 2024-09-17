/**
 * This file can be used to define DOM test utils
 */

import { screen } from '@testing-library/dom';

//////////////////////////////////////////////////////////////
export const mockLocationAssign = (href = 'https://localhost') => {
  const assign = vi.fn();
  Object.defineProperty(window, 'location', {
    configurable: true,
    value: new URL(href),
  });
  window.location.assign = assign;
  return assign;
};

//////////////////////////////////////////////////////////////
export const mockOpen = () => {
  const open = vi.fn();
  Object.defineProperty(window, 'open', {
    configurable: true,
    value: open,
  });
  return open;
};

//////////////////////////////////////////////////////////////
export const expectTextNoExist = (text: string) => {
  expect(screen.queryByText(text)).toBeNull();
};
