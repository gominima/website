import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Pages from 'vite-plugin-pages';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages()],
  resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`,
		},
	},
	server : process.env.DOCKER ? {
		hmr: {
			port: 443
		}
	} : {}
});
