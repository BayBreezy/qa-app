<template>
	<header
		class="sticky top-0 border-b border-gray-100 bg-white/80 dark:bg-dark/60 backdrop-blur dark:border-gray-800/50"
	>
		<div class="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl lg:h-24">
			<div class="flex items-center space-x-10">
				<NuxtLink to="/" class="text-xl font-medium">
					<span>QA App </span>
				</NuxtLink>
				<button
					@click="$refs.searchPanel.openModal()"
					class="hidden pr-10 space-x-3 text-gray-400 btn-flat lg:inline-block"
				>
					<Icon name="fluent:search-24-regular" size="18" />
					<span> Search question or answer... </span>
				</button>
			</div>
			<div class="items-center hidden lg:flex">
				<nav class="flex items-center space-x-1">
					<NuxtLink
						v-tooltip="`Go to home page`"
						class="text-sm font-medium px-4 py-2.5 text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
						to="/"
					>
						<span>Home</span>
					</NuxtLink>
					<button
						v-tooltip="`Sign into your account`"
						@click="$refs.signIn.openModal()"
						class="text-sm font-medium px-4 py-2.5 text-gray-500 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
					>
						<span>Sign In</span>
					</button>
				</nav>
				<button
					@click="$refs.createAccount.openModal()"
					v-tooltip="`Creat an account`"
					class="ml-5 btn"
				>
					Account
				</button>
				<div class="pl-5 border-l dark:border-gray-800 ml-7">
					<button
						@click="toggleDark()"
						class="px-2 py-1 text-gray-500 hover:text-primary dark:hover:text-primary"
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
		<!-- Sign in modal -->
		<SignIn ref="signIn" />
	</header>
</template>

<script setup>
	const { isDark, toggleDark } = useTheme();
</script>
