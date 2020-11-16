<script context="module">
	export function preload() {
		return this.fetch(`about.json`).then(r => r.json()).then(contributors => {
			return { contributors };
		});
	}
</script>

<script>
	export let contributors;
	console.log("Contributors", contributors)
	import ContactForm from "./_ContactForm.svelte"
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<style>
	section {
		height: calc(100vh - var(--nav-height));
		padding: 2rem;
	}
	img {
		max-width: 100%;
	}
</style>

<section>
	<h1>About <b>{contributors[0].title}</b></h1>

	<img src="{contributors[0].image.thumbnail}" alt="{contributors[0].alt}">
</section>

<section>
	<ContactForm/>
</section>