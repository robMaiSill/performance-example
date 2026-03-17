import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@core': resolve(__dirname, './src/app/core'),
      '@trip': resolve(__dirname, './src/app/features/trip'),
      '@basket': resolve(__dirname, './src/app/features/basket'),
      '@shared': resolve(__dirname, './src/app/shared'),
    },
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['src/test-setup.ts'],
    include: ['src/**/*.spec.ts'],
    pool: 'threads',
    singleThread: true,
    server: {
      deps: {
        inline: ['@angular/**'],
      },
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'src/test.ts',
        '**/*.spec.ts',
        'src/environments/',
      ],
    },
  },
});
