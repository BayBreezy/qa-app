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
								class="w-full p-8 max-w-md overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-xl transition-all"
							>
								<DialogTitle
									as="h3"
									class="text-xl font-medium leading-6 text-gray-900 dark:text-gray-50"
								>
									Create Account
								</DialogTitle>
								<DialogDescription class="mt-4 mb-7 text-sm text-gray-400"
									>Create an account to post questions & answers</DialogDescription
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
									<button type="button" class="text-sm hover:underline text-primary-400">
										Login instead
									</button>
								</div>

								<div class="mt-4 flex justify-end items-center space-x-3">
									<button type="button" class="btn-flat py-3" @click="closeModal">Cancel</button>
									<button type="button" class="btn py-3" @click="closeModal">Create account</button>
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
