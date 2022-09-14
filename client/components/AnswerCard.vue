<template>
	<div class="">
		<p class="mb-4">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ea non voluptatem ratione
			perspiciatis perferendis magni deleniti eligendi sequi, molestias distinctio natus libero
			reprehenderit quos ullam exercitationem fugiat commodi saepe!
		</p>

		<div class="flex items-center space-x-5">
			<div class="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
				<Icon size="16" name="fluent:chat-24-regular" />
				<span class="text-sm">15 answers</span>
			</div>
			<div class="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
				<Icon size="16" name="fluent:heart-24-regular" />
				<span class="text-sm">15 likes</span>
			</div>
			<div class="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
				<Icon size="16" name="fluent:person-24-regular" />
				<span class="text-sm">Behon Baker</span>
			</div>
		</div>

		<h1 class="mt-5 font-medium">Comments</h1>
		<div class="px-3 mt-4 space-y-4">
			<template v-for="(c, i) in 5" :key="`comment-${i}`">
				<div class="pb-5 mb-2 border-b dark:border-slate-800">
					<p class="mb-5 text-sm text-gray-600 dark:text-gray-200">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, impedit.
					</p>
					<div class="flex items-center space-x-5">
						<div class="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
							<Icon size="16" name="fluent:calendar-20-regular" />
							<span class="text-sm">Sept 15, 2022</span>
						</div>
						<div class="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
							<Icon size="16" name="fluent:person-24-regular" />
							<span class="text-sm">Behon Baker</span>
						</div>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style></style>
