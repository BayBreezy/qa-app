<template>
	<div class="min-h-screen">
		<main class="flex items-start gap-10 px-4 py-5 mx-auto max-w-7xl lg:py-10">
			<NavAccount />
			<section class="max-w-2xl grow">
				<h1 class="text-2xl lg:text-4xl">Profile</h1>
				<p class="text-gray-500 lg:text-lg lg:mt-2">Manage your profile here</p>

				<div class="mt-10 space-y-3">
					<FormInput id="username" label="Username" name="username" />
					<FormInput id="email" label="Email" name="email" />
					<button class="py-3 btn">Save changes</button>
				</div>
				<h1 class="mt-10 text-2xl lg:text-4xl">Update password</h1>
				<p class="text-gray-500 lg:text-lg lg:mt-2">Change your password here</p>
				<div class="mt-10 space-y-3">
					<FormInput id="old_password" label="Old Password" name="old_password" />
					<FormInput id="new_password" label="New Password" name="new_password" />
					<button class="py-3 btn">Save password</button>
				</div>
			</section>
		</main>
	</div>
</template>

<script setup></script>
