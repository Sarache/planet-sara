import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	base: "/planet-sara/",
	build: {
		outDir: 'dist',       // Where the build files will go
		assetsDir: 'assets',  // The directory for assets inside the dist folder 
		},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
})
