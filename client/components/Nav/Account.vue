<template>
	<nav
		class="sticky flex-col hidden p-4 space-y-2 border border-gray-100 rounded-lg top-32 lg:flex w-72 dark:border-slate-900 dark:bg-gray-900"
	>
		<template v-for="(m, i) in menu" :key="`profileMenu-${i}`">
			<NuxtLink
				:to="m.link"
				class="flex items-center px-3 py-3 space-x-3 text-gray-500 transition-all rounded-lg dark:hover:text-gray-100 dark:hover:bg-slate-800 hover:text-gray-600 hover:bg-gray-100"
			>
				<Icon :name="m.icon" size="21" />
				<span>{{ m.name }}</span>
			</NuxtLink>
		</template>
	</nav>
</template>

<script setup>
	const menu = ref([
		{ name: "Profile", icon: "heroicons:user", link: "/profile" },
		{ name: "Questions", icon: "heroicons:question-mark-circle", link: "/questions" },
		{ name: "Answers", icon: "heroicons:information-circle", link: "/answers" },
	]);
</script>

<style scoped>
	.router-link-active.router-link-exact-active {
		@apply dark:text-gray-100 dark:bg-slate-800 text-gray-600 bg-gray-100;
	}
</style>
