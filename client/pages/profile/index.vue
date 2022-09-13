<template>
	<div class="min-h-screen">
		<main class="flex items-start gap-10 px-4 py-5 mx-auto max-w-7xl lg:py-10">
			<nav
				class="sticky flex-col hidden p-4 space-y-2 border border-gray-100 rounded-lg top-32 lg:flex w-72 dark:border-slate-800"
			>
				<template v-for="(m, i) in menu" :key="`profileMenu-${i}`">
					<NuxtLink
						:to="m.link"
						class="flex items-center px-3 py-3 space-x-3 text-gray-500 transition-all rounded-lg dark:hover:text-gray-100 dark:hover:bg-slate-900 hover:text-gray-600 hover:bg-gray-100"
					>
						<Icon :name="m.icon" size="21" />
						<span>{{ m.name }}</span>
					</NuxtLink>
				</template>
			</nav>
			<section class="max-w-2xl grow">
				<h1 class="text-2xl lg:text-4xl">Profile</h1>
				<p class="text-gray-500 lg:text-lg lg:mt-2">Manage your profile here</p>

				<div class="mt-10 space-y-3">
					<FormInput id="username" label="Username" name="username" />
					<FormInput id="email" label="Email" name="email" />
					<button class="py-3 btn">Save changes</button>
				</div>
				<h1 class="mt-10 text-2xl lg:text-4xl">Update password</h1>
				<p class="text-gray-500 lg:text-lg lg:mt-2">Change your password here</p>
				<div class="mt-10 space-y-3">
					<FormInput id="old_password" label="Old Password" name="old_password" />
					<FormInput id="new_password" label="New Password" name="new_password" />
					<button class="py-3 btn">Save password</button>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup>
	const menu = ref([
		{ name: "Profile", icon: "heroicons:user", link: "/profile" },
		{ name: "Questions", icon: "heroicons:question-mark-circle", link: "/questions" },
		{ name: "Answers", icon: "heroicons:information-circle", link: "/answers" },
	]);
</script>
