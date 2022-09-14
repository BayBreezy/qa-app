<template>
	<div class="min-h-screen">
		<main class="max-w-5xl px-4 py-5 mx-auto lg:py-10">
			<h1 class="mb-8 text-2xl lg:text-4xl">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, asperiores!
			</h1>
			<!-- User info -->
			<UserInfo />
			<div class="mt-10 space-y-10">
				<template v-for="n in 4" :key="n">
					<AnswerCard />
				</template>
			</div>
		</main>
	</div>
</template>
