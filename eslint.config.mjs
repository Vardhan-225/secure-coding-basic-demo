import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    rules: {
      'semi': ['error', 'always'],    // Flag missing semicolons
      'quotes': ['error', 'single'],  // Enforce single quotes
      'no-eval': 'error'              // Prevent the use of eval (common security issue)
    }
  },
  pluginJs.configs.recommended,
];
