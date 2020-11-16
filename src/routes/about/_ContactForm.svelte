<style>
	section {
		height: 100%;
		width: 100%;
		padding: var(--nav-height);
	}
	div {
		height: 100%;
		width: 100%;
		background: #eee;
		padding: 2rem;
	}
	
	h1 {
		font-size: 3rem;
	}
	input, textarea {
		width: 100%;
		padding: 1rem;
	}
	
	p {
		margin-bottom: 2rem;
	}
	
	button {
		padding: 1.2rem;
		background: rgb(185, 231, 116);
		color: #555;
		font-size: 1.2rem;
	}
</style>

<section>
	<div>
		
		<h1>Contact</h1>
		<form name="contact" method="POST" data-netlify="true" netlify-honeypot=“bot-field”>
			<input type="hidden" name="form-name" value="contact" />
			<p>
				<label>Name<input type="text" name="name" /></label>   
			</p>
			<p>
				<label>Email<input type="email" name="email" /></label>
			</p>
			<p>
				<label>Message<textarea name="message"></textarea></label>
			</p>
			<p>
				<button type="submit">Send</button>
			</p>
		</form>
		
	</div>
</section>