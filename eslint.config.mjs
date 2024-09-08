// @ts-check
import eslintPrettier from 'eslint-config-prettier';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  // Your custom configs here

  eslintPrettier,
  {
    rules: {
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['default', 'index']
        }
      ]
    }
  }
);
