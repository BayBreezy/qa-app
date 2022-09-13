import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "nuxt-icon", "floating-vue/nuxt"],
	build: {
		transpile: ["@headlessui/vue", "@headlessui/tailwindcss"],
	},
	tailwindcss: {
		cssPath: "~/assets/main.css",
	},
	meta: {
		title: "QA App",
	},
});
