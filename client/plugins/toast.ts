import Toast from "vue-toastification/dist/index.mjs";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((app) => {
	app.vueApp.use(Toast);
});
