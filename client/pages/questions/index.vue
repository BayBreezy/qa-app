<template>
	<div class="min-h-screen">
		<main class="flex items-start gap-10 px-4 py-5 mx-auto max-w-7xl lg:py-10">
			<NavAccount />
			<section class="max-w-2xl grow">
				<h1 class="text-2xl lg:text-4xl">Questions</h1>
				<p class="mb-6 text-gray-500 lg:text-lg lg:mt-2">Manage your questions here</p>

				<FormInput
					start-icon="fluent:search-24-regular"
					name="search"
					type="search"
					placeholder="Search for a question..."
				/>
				<div class="space-y-5 mt-7">
					<template v-for="n in 3" :key="n">
						<QuestionCard />
					</template>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup></script>
