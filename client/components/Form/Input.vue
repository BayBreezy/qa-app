<template>
	<div class="z-0 w-full">
		<label
			v-if="label"
			:for="id"
			class="block mb-1 text-sm font-medium text-gray-600 dark:text-gray-300"
			>{{ label }}</label
		>
		<div
			class="relative flex items-center transition-all border border-gray-400 rounded-lg hover:border-gray-500 dark:border-gray-800 dark:hover:border-gray-500 dark:focus-within:hover:border-primary/50 dark:focus-within:border-primary/40 dark:bg-gray-900 focus-within:hover:border-primary/30 focus-within:border-primary/40 focus-within:ring-4 focus-within:ring-primary/20 overflow-clip"
		>
			<span v-if="startIcon" class="absolute -translate-y-1/2 left-3 top-1/2">
				<Icon :name="startIcon" size="23" class="text-gray-500" />
			</span>
			<input
				:placeholder="placeholder"
				:disabled="disabled"
				class="grow outline-none border-0 p-3 text-[15px] rounded-lg bg-transparent dark:text-white"
				:class="[{ 'pl-11': startIcon, 'pr-11': endIcon }]"
				:type="type"
				:name="name"
				v-model="value"
				:id="id"
			/>
			<span v-if="endIcon" class="absolute -translate-y-1/2 right-3 top-1/2">
				<Icon :name="endIcon" size="23" class="text-gray-500" />
			</span>
		</div>
		<div class="mt-1 text-xs text-red-500">
			<span class="text-transparent select-none">.</span><span>{{ errorMessage }}</span>
		</div>
	</div>
</template>

<script setup>
	import { useField } from "vee-validate";

	const props = defineProps({
		label: [String, Boolean],
		modelValue: [String, Number],
		id: [String, Number],
		rules: {
			type: [String, Function, Array],
		},
		type: {
			type: [String, Number],
			deftault: "text",
		},
		startIcon: String,
		placeholder: String,
		disabled: Boolean,
		endIcon: String,
		name: {
			type: [String, Number],
			required: true,
		},
	});

	const { errorMessage, value } = useField(ref(props.name), props.rules, {
		initialValue: props.modelValue,
		label: props.label || props.name,
	});
</script>

<style></style>
