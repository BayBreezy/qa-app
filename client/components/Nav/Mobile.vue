<template>
	<div>
		<button
			v-if="!showMenu"
			@click="showMenu = !showMenu"
			class="fixed z-50 p-4 rounded-full shadow lg:hidden bottom-8 right-8 bg-white/50 dark:border-gray-700 dark:bg-gray-900/50 backdrop-blur"
		>
			<Icon v-if="!showMenu" size="28" name="heroicons:bars-3-bottom-right-solid" />
			<Icon v-else size="28" name="heroicons:x-mark" />
		</button>
		<TransitionRoot as="template" :show="showMenu">
			<Dialog as="div" class="z-10" @close="showMenu = false">
				<TransitionChild
					as="template"
					enter="ease-in-out duration-500"
					enter-from="opacity-0"
					leave="ease-in-out duration-500"
					leave-to="opacity-0"
				>
					<div class="fixed inset-0 bg-black/30" />
				</TransitionChild>

				<!-- Scrolable container -->
				<div class="fixed inset-0 overflow-y-auto">
					<!-- Modal body container- used to position the content -->
					<div class="flex justify-start min-h-full pr-5">
						<TransitionChild
							as="template"
							enter="transition-all ease duration-500"
							enter-from="-translate-x-full"
							leave="transition-all ease duration-500"
							leave-to="-translate-x-full"
						>
							<DialogPanel class="w-full max-w-sm py-4 bg-white">
								<div class="flex items-center justify-between px-5 pb-5 border-b">
									<NuxtLink to="/" class="text-lg font-semibold"> QA App </NuxtLink>

									<button @click="showMenu = false">
										<Icon class="text-gray-500" name="heroicons:x-mark-solid" />
									</button>
								</div>
							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</Dialog>
		</TransitionRoot>
	</div>
</template>

<script setup>
	import {
		Dialog,
		DialogPanel,
		DialogTitle,
		TransitionChild,
		TransitionRoot,
	} from "@headlessui/vue";
	const showMenu = ref(false);
	const { isDark, toggleDark } = useTheme();
</script>

<style></style>
