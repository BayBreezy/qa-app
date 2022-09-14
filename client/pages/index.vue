<template>
	<div class="min-h-screen">
		<main class="px-4 py-5 mx-auto max-w-7xl lg:py-10">
			<h1 class="text-2xl lg:text-4xl">Latest Questions</h1>
			<p class="text-gray-500 lg:text-lg lg:mt-2">See the latest trending topics</p>
			<section class="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2">
				<template v-for="n in 3" :key="n">
					<QuestionCard />
				</template>
			</section>
		</main>
	</div>
</template>
