<script>
	export let segment;
</script>

<style>
	nav {
		height: var(--nav-height);
		background: #222;
		color: #eee;
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
	}

ul {
	height: 100%;
	display: flex;
	flex-flow: row;
	max-width: 56rem;
	margin: 0 auto;
	justify-content: left;
	align-items: center;
	gap: 1rem;
}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<!-- <li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li> -->
		<!-- <li><a aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">projects</a></li> -->

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>
	</ul>
</nav>
