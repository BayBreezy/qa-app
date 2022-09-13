<template>
	<div>
		<TransitionRoot :show="isOpen" as="template">
			<Dialog as="div" @close="closeModal" class="relative z-10">
				<TransitionChild
					as="div"
					enter="ease-in-out duration-500"
					enter-from="opacity-0"
					leave="ease-in-out duration-500"
					leave-to="opacity-0"
				>
					<!-- Overlay -->
					<div class="fixed inset-0 bg-black/30 backdrop-blur" />
				</TransitionChild>

				<!-- Scrollable container -->
				<div class="fixed inset-0 overflow-y-auto">
					<!-- Modal body container- used to position the box -->
					<div class="flex items-center justify-center min-h-full p-4">
						<TransitionChild
							as="template"
							enter="duration-300"
							leave="duration-300"
							enter-from="opacity-0 scale-75"
							leave-to="opacity-0 scale-75"
						>
							<DialogPanel
								class="w-full max-w-md p-8 overflow-hidden transition-all bg-white shadow-xl rounded-2xl dark:bg-gray-900"
							>
								<DialogTitle
									as="h3"
									class="text-xl font-medium leading-6 text-gray-900 dark:text-gray-50"
								>
									Sign In
								</DialogTitle>
								<DialogDescription class="mt-4 text-sm text-gray-400 mb-7"
									>Sign into your account to manage questions & answers</DialogDescription
								>
								<div class="mt-2">
									<form>
										<div>
											<FormInput
												id="email"
												label="Email"
												name="email"
												type="email"
												rules="required|email"
											/>
										</div>
										<div class="my-2">
											<FormInput
												id="password"
												label="Password"
												name="password"
												type="password"
												rules="required|min:6"
											/>
										</div>
									</form>
								</div>

								<div class="flex items-center justify-end mt-4 space-x-3">
									<button type="button" class="py-3 btn-flat" @click="closeModal">Cancel</button>
									<button type="button" class="py-3 btn" @click="closeModal">Sign In</button>
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
		TransitionRoot,
		TransitionChild,
		Dialog,
		DialogPanel,
		DialogTitle,
		DialogDescription,
	} from "@headlessui/vue";

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
