<template>
	<div class="projects">
		<slot />
	</div>
</template>

<style lang="stylus" scoped>
	.projects {
		display: flex;
		justify-content: center;
		flex-flow: wrap;
		margin: -1rem;
		margin-top: 1rem;
	}
</style>