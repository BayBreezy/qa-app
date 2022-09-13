import { defineRule } from "vee-validate";
import { required, min, min_value, max, max_value, email, url } from "@vee-validate/rules";

export default defineNuxtPlugin((app) => {
	defineRule("required", required);
	defineRule("min", min);
	defineRule("min_value", min_value);
	defineRule("max", max);
	defineRule("max_value", max_value);
	defineRule("email", email);
	defineRule("url", url);
});
