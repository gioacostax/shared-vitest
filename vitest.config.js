/**
 * This file can be used to define Vitest configuration,
 * more info in https://vitest.dev/config/
 */

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    clearMocks: true,
    coverage: {
      all: true,
      provider: 'istanbul',
      reporter: ['html-spa', 'lcov', 'text'],
    },
    environment: 'jsdom',
    globals: true,
    outputFile: {
      junit: 'reports/junit.xml',
    },
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    reporters: ['default', 'junit'],
  },
});
