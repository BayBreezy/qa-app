<template>
	<div class="p-5 border rounded-xl dark:border-gray-900">
		<!-- User info -->
		<UserInfo />
		<!-- Topic -->
		<NuxtLink to="/">
			<h1 class="mt-5 text-xl font-semibold transition-all lg:text-3xl hover:text-primary">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, asperiores!
			</h1>
		</NuxtLink>
		<!-- meta data -->
		<div class="flex items-center space-x-5 mt-7">
			<div class="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
				<Icon size="16" name="fluent:chat-24-regular" />
				<span class="text-sm">15 answers</span>
			</div>
			<div class="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
				<Icon size="16" name="fluent:heart-24-regular" />
				<span class="text-sm">15 likes</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
