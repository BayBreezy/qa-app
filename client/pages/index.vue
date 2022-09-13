<template>
	<div class="min-h-screen">
		<NavHeader />
		<main class="px-4 py-5 mx-auto max-w-7xl lg:py-10">
			<h1 class="text-2xl lg:text-4xl">Latest Questions</h1>
			<p class="text-gray-500 lg:text-lg lg:mt-2">See the latest trending topics</p>
			<section class="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2">
				<template v-for="n in 3" :key="n">
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
			</section>
		</main>
	</div>
</template>
