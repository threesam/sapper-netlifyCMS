<style>
 	footer {
		height: var(--nav-height);
		background: #222;
		color: #eee;
		border-bottom: 1px solid rgba(255,62,0,0.1);
    font-weight: 300;
    width: 100%;
  }
  ul {
    height: 100%;
    display: flex;
    flex-flow: row;
    max-width: 56rem;
    margin: 0 auto;
    justify-content: left;
    align-items: center;
    padding: 0 2rem;

    gap: 1rem;
  }
</style>

<footer>
  <ul>
    <slot />
    <li>more at <a href="https://threesam.com">threesam</a></li>
  </ul>
</footer>