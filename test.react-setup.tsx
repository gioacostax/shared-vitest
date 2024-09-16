/**
 * This file can be used to define Vitest setup
 */

import { cleanup } from '@testing-library/react';

afterEach(() => {
  cleanup();
});
