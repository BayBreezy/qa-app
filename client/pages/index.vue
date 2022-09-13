<template>
	<div class="min-h-screen">
		<NavHeader />
		<main class="mx-auto max-w-7xl py-5 lg:py-10 px-4">
			<h1 class="lg:text-4xl text-2xl">Latest Questions</h1>
			<p class="lg:text-lg lg:mt-2 text-gray-500">See the latest trending topics</p>
			<section class="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5">
				<template v-for="n in 3" :key="n">
					<div class="border p-5 rounded-xl dark:border-gray-900">
						<!-- User info -->
						<div class="flex items-center space-x-3">
							<div
								class="ring-1 h-11 w-11 overflow-hidden ring-primary dark:ring-primary/50 rounded-full bg-transparent"
							>
								<img
									src="https://behonbaker.com/icon.png"
									alt="User image"
									class="object-cover w-full h-full"
								/>
							</div>
							<div>
								<p class="dark:text-gray-400 text-gray-500 text-sm font-medium mb-0">Behon Baker</p>
								<small class="text-xs text-gray-400 dark:text-gray-600">Sep 12, 2022</small>
							</div>
						</div>
						<!-- Topic -->
						<NuxtLink to="/">
							<h1 class="text-xl lg:text-3xl mt-5 font-semibold hover:text-primary transition-all">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, asperiores!
							</h1>
						</NuxtLink>
						<!-- meta data -->
						<div class="flex items-center mt-7 space-x-5">
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
