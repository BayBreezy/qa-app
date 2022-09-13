<template>
	<div>
		<ClientOnly>
			<QuillEditor contentType="html" v-bind="$attrs" theme="snow" />
		</ClientOnly>
	</div>
</template>

<script setup></script>

<style scoped>
	:deep(.ql-toolbar.ql-snow) {
		border-radius: 8px 8px 0 0;
		border: 1px solid theme("colors.gray.400");
	}
	:deep(.ql-container) {
		border: 1px solid theme("colors.gray.400") !important;
		border-top: 0 !important;
		border-radius: 0 0 8px 8px;
	}
	:deep(.ql-editor) {
		height: 150px;
	}
</style>
