<template>
	<div>
		<button
			v-if="!showMenu"
			@click="showMenu = !showMenu"
			class="fixed z-50 p-4 rounded-full shadow lg:hidden bottom-8 right-8 bg-white/50 dark:border-gray-700 dark:bg-gray-600/50 backdrop-blur"
		>
			<Icon size="28" name="heroicons:bars-3-bottom-right-solid" />
		</button>
		<TransitionRoot as="template" :show="showMenu">
			<Dialog as="div" class="z-30" @close="showMenu = false">
				<TransitionChild
					as="template"
					enter="ease-in-out duration-500"
					enter-from="opacity-0"
					leave="ease-in-out duration-500"
					leave-to="opacity-0"
				>
					<div class="fixed inset-0 bg-black/30 backdrop-blur" />
				</TransitionChild>

				<!-- Scrolable container -->
				<div class="fixed inset-0 z-30 overflow-y-auto">
					<!-- Modal body container- used to position the content -->
					<div class="flex justify-start min-h-full pr-5">
						<TransitionChild
							as="template"
							enter="transition-all ease duration-500"
							enter-from="-translate-x-full"
							leave="transition-all ease duration-500"
							leave-to="-translate-x-full"
						>
							<DialogPanel
								class="w-full max-w-sm py-4 border-r bg-white/90 dark:border-gray-800 dark:bg-dark/50 backdrop-blur-md"
							>
								<div
									class="flex items-center justify-between px-5 pb-5 border-b dark:border-gray-700"
								>
									<NuxtLink to="/" class="text-lg font-semibold dark:text-gray-50">
										QA App
									</NuxtLink>

									<button @click="showMenu = false">
										<Icon class="text-gray-500" name="heroicons:x-mark-solid" />
									</button>
								</div>
								<nav class="flex flex-col m-5 space-y-4">
									<template v-for="(m, i) in menu" :key="`mobileMenuItem${i}`">
										<NuxtLink
											v-if="m.link"
											:to="m.link"
											@click="showMenu = false"
											class="flex items-center p-2 space-x-2 text-gray-500 rounded hover:text-primary dark:text-gray-50"
										>
											<Icon :name="m.icon" size="20" />
											<span class="font-medium">{{ m.name }}</span>
										</NuxtLink>
										<button
											@click="menuAction(m.action)"
											v-else
											:to="m.link"
											class="flex items-center p-2 space-x-2 text-gray-500 rounded hover:text-primary dark:text-gray-50"
										>
											<Icon :name="m.icon" size="20" />
											<span class="font-medium">{{ m.name }}</span>
										</button>
									</template>
								</nav>
							</DialogPanel>
						</TransitionChild>
					</div>
				</div>
			</Dialog>
		</TransitionRoot>
		<!-- Create account modal -->
		<CreateAccount ref="createAccount" />
		<!-- search panel modal -->
		<SearchPanel ref="searchPanel" />
		<!-- Sign in modal -->
		<SignIn ref="signIn" />
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
	const menu = ref([
		{ name: "Home", icon: "heroicons:home", link: "/" },
		{ name: "Sign In", icon: "heroicons:arrow-left-on-rectangle-20-solid", action: "login" },
		{ name: "Create Account", icon: "heroicons:user", action: "account" },
		{ name: "Search", icon: "heroicons:magnifying-glass", action: "search" },
		{ name: "Change Theme", icon: "heroicons:sun", action: "theme" },
	]);

	const createAccount = ref();
	const searchPanel = ref();
	const signIn = ref();

	const menuAction = (action) => {
		switch (action) {
			case "account":
				showMenu.value = false;
				createAccount.value.openModal();
				break;
			case "search":
				showMenu.value = false;
				searchPanel.value.openModal();
				break;
			case "login":
				showMenu.value = false;
				signIn.value.openModal();
				break;
			case "theme":
				toggleDark();
				break;

			default:
				break;
		}
	};
</script>

<style></style>
