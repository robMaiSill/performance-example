// @ts-check
import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import angular from "angular-eslint";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  // Global ignores
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      ".angular/**",
      "coverage/**",
      "server/**/*.js",
      "src/app/features/trip/api/**", // Auto-generated API client
      "**/*.spec.ts", // Test files can have relaxed rules
    ],
  },
  // TypeScript files
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      tseslint.configs.stylistic,
      angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_"
      }],
    },
  },
  // HTML template files
  {
    files: ["**/*.html"],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    rules: {},
  },
  // Prettier integration (must be last to override other configs)
  prettierConfig,
]);
