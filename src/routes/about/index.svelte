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
	p {
		margin-bottom: 1rem;
	}
</style>

<section>
	<h1>About <b></b></h1>

</section>

<section>
	<ContactForm/>
</section>