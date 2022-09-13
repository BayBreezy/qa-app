<template>
	<div>
		<TransitionRoot :show="isOpen" as="template">
			<Dialog as="div" @close="closeModal" class="relative z-10">
				<TransitionChild
					as="div"
					enter="duration-300 transition-all"
					leave="duration-300 transition-all"
					enter-from="opacity-0"
					leave-to="opacity-0"
				>
					<!-- Overlay -->
					<div class="fixed inset-0 bg-black/30 backdrop-blur" />
				</TransitionChild>

				<!-- Scrollable container -->
				<div class="fixed inset-0 overflow-y-auto">
					<!-- Modal body container- used to position the box -->
					<div class="flex min-h-full items-center justify-center p-4">
						<TransitionChild
							as="template"
							enter="duration-300"
							leave="duration-300"
							enter-from="opacity-0 scale-75"
							leave-to="opacity-0 scale-75"
						>
							<DialogPanel
								class="w-full p-8 max-w-xl overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-xl transition-all"
							>
								<FormInput
									id="search-panel"
									placeholder="Search for questions here..."
									name="search-panel"
									type="search"
									start-icon="fluent:search-24-regular"
								/>
								<div class="mt-2">
									<h2 class="font-semibold text-sm dark:text-gray-50">Questions</h2>
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
	import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from "@headlessui/vue";

	const isOpen = ref(false);

	function closeModal() {
		isOpen.value = false;
	}
	function openModal() {
		isOpen.value = true;
	}
	defineExpose({
		closeModal,
		openModal,
	});
</script>
