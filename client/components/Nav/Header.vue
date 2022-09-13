<template>
	<header
		class="sticky top-0 bg-white/80 dark:bg-dark/60 backdrop-blur border-b border-gray-100 dark:border-gray-800/50"
	>
		<div class="max-w-7xl mx-auto lg:h-24 h-16 flex items-center justify-between px-4">
			<div class="flex items-center space-x-10">
				<NuxtLink to="/" class="text-xl font-medium">
					<span>QA App </span>
				</NuxtLink>
				<button
					@click="$refs.searchPanel.openModal()"
					class="btn-flat text-gray-400 space-x-3 pr-10 hidden lg:inline-block"
				>
					<Icon name="fluent:search-24-regular" size="18" />
					<span> Search question or answer... </span>
				</button>
			</div>
			<div class="lg:flex items-center hidden">
				<nav class="flex items-center space-x-1">
					<NuxtLink
						v-tooltip="`Go to home page`"
						class="text-sm font-medium px-4 py-2.5 text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
						to="/"
					>
						<span>Home</span>
					</NuxtLink>
				</nav>
				<button
					@click="$refs.createAccount.openModal()"
					v-tooltip="`Creat an account`"
					class="btn ml-5"
				>
					Account
				</button>
				<div class="border-l dark:border-gray-800 ml-7 pl-5">
					<button
						@click="toggleDark()"
						class="text-gray-500 hover:text-primary dark:hover:text-primary py-1 px-2"
					>
						<Icon
							:name="isDark ? 'fluent:weather-sunny-24-regular' : 'fluent:weather-moon-24-regular'"
						/>
					</button>
				</div>
			</div>
		</div>
		<!-- Create account modal -->
		<CreateAccount ref="createAccount" />
		<!-- search panel modal -->
		<SearchPanel ref="searchPanel" />
	</header>
</template>

<script setup>
	const { isDark, toggleDark } = useTheme();
</script>
