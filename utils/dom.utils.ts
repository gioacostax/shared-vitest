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
export const matchMediaMock = (matches = false) => {
  Object.defineProperty(window, 'matchMedia', {
    enumerable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      addEventListener: vi.fn().mockImplementation((_, fn: (e: MediaQueryListEvent) => void) => {
        fn({ matches } as never);
      }),
      dispatchEvent: vi.fn(),
      matches,
      media: query,
      onchange: null,
      removeEventListener: vi.fn().mockImplementation((_, fn: (e: MediaQueryListEvent) => void) => {
        fn({ matches } as never);
      }),
    })),
    writable: true,
  });
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
export const alertMock = () => {
  const alert = vi.fn();
  Object.defineProperty(window, 'alert', {
    configurable: true,
    value: alert,
  });
  return alert;
};

//////////////////////////////////////////////////////////////
export const expectTextNotExist = (text: string) => {
  expect(screen.queryByText(text)).toBeNull();
};
