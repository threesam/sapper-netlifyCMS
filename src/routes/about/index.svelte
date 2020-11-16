<script>
	import ContactForm from "./_ContactForm.svelte"
</script>
<svelte:head>
	<title>About</title>
</svelte:head>

<style>
	section {
		height: calc(100vh - var(--nav-height));
	}
</style>

<section>
	<h1>About</h1>
</section>

<section>
	<ContactForm/>
</section>