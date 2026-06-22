import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://luc.works',
  devToolbar: {
    enabled: false
  },
  integrations: [react()]
});
