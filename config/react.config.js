/**
 * This file can be used to define Vitest configuration,
 * more info in https://vitest.dev/config/
 */

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

/**
 * Vitest React config dependencies
 * - @vitejs/plugin-react
 * - vite
 * - @testing-library/dom
 * - @testing-library/jest-dom
 * - @testing-library/react
 * - @testing-library/user-event
 */
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: [resolve(__dirname, './react.setup.tsx')],
  },
});
