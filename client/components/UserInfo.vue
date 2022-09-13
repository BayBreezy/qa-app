<template>
	<Popover class="relative">
		<PopoverButton class="outline-none group">
			<div class="flex items-center space-x-3">
				<div
					class="overflow-hidden bg-transparent rounded-full ring-1 h-11 w-11 ring-primary dark:ring-primary/50"
				>
					<img
						src="https://behonbaker.com/icon.png"
						alt="User image"
						class="object-cover w-full h-full"
					/>
				</div>
				<div class="text-left">
					<p
						class="mb-0 text-sm font-medium text-gray-500 group-hover:text-primary group-hover:underline dark:text-gray-400"
					>
						Behon Baker
					</p>
					<small class="text-xs text-gray-400 dark:text-gray-600">Posted: Sep 12, 2022</small>
				</div>
			</div>
		</PopoverButton>
		<transition name="popover">
			<PopoverPanel
				class="absolute z-10 p-4 bg-white border shadow-xl dark:border-gray-800 dark:bg-slate-900 dark:text-gray-50 w-96 rounded-xl"
			>
				<div class="flex items-center space-x-3">
					<div
						class="overflow-hidden bg-transparent rounded-full ring-1 h-11 w-11 ring-primary dark:ring-primary/50"
					>
						<img
							src="https://behonbaker.com/icon.png"
							alt="User image"
							class="object-cover w-full h-full"
						/>
					</div>
					<div class="text-left">
						<p class="mb-0 text-sm font-medium text-gray-600 dark:text-gray-400">Behon Baker</p>
						<small class="text-xs text-gray-400 dark:text-gray-600">Joined: Sep 12, 2022</small>
					</div>
				</div>
				<div class="mt-2">
					<p class="text-sm text-gray-500">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore possimus distinctio et
						labore minima ratione, commodi optio.
					</p>
					<button class="w-full mt-3 btn">Follow</button>
				</div>
			</PopoverPanel>
		</transition>
	</Popover>
</template>

<script setup>
	import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
</script>

<style></style>
