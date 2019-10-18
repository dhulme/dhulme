<template>
	<a class="project" :href="`/${link}/`">
		<div class="container">
			<h3 class="title">{{ title }}</h3>
			<p class="description">{{ description }}</p>
			<a :href="`/${link}/`">dhulme.uk/{{ link }}</a>
			<a :href="'https://github.com/dhulme/' + link"><img src="/social-images/github-circle.svg" /></a>
		</div>
	</a>
</template>

<script>
export default {
	props: ['title', 'link', 'description']
}
</script>

<style lang="stylus" scoped>
	a.project {
		width: 12rem;
		height: 12rem;
    color: #4e6e8e;
    display: block;
    border: 1px solid #cfd4db;
    border-radius: .5rem;
    padding: 1rem;
		margin: 0.75rem;
    outline: none;
    transition: all .2s ease;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			text-decoration: none;
			border-color: #3eaf7c;
		}
	}

	a {
		display: block;
		font-size: .9rem;
	}

	img {
		margin-top: .5rem;
		width: 2rem;
		height: 2rem;
	}

	.description {
		font-size: .8rem;
	}
</style>