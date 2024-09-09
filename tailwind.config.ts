import type { Config } from 'tailwindcss';

const config: Partial<Config> = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
