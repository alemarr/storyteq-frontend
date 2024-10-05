import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue-cli',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
  },
});
