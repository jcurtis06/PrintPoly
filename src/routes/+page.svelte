<script lang="ts">
	import { fade } from 'svelte/transition';

	let email = '';
	let showSuccess = false;

	const handleSubmit = (e: Event) => {
		e.preventDefault();
		showSuccess = true;
		console.log(email);

		setTimeout(() => {
			showSuccess = false;
		}, 5000);
	};
</script>

<div class="flex flex-col items-center">
	<div class="flex flex-col items-center max-w-3xl px-5">
		<div class="text-center my-8">
			<h1 class="text-3xl font-kode font-extrabold text-white">PrintPoly</h1>
			<p class="font-kode text-gray-200">3D Printing at an Affordable Price</p>
		</div>
		<hr class="w-full border-1 border-gray-400 mb-8" />
		<div>
			<p class="font-kode text-gray-200"><b>What is PrintPoly?</b></p>
			<p>
				PrintPoly is an online service that allows users to send 3D models to be printed and shipped
				to them.
			</p>

			<p class="mt-4 font-kode text-gray-200"><b>Who is it for?</b></p>
			<p>
				Hobbyists who need something printed, or designers who are trying out a new product.
				Additionally, PrintPoly can handle the demand of businesses that rely on 3D printing and can
				mail directly to their customers.
			</p>

			<p class="mt-4 font-kode text-gray-200"><b>How much does it cost?</b></p>
			<p>
				PrintPoly is an affordable platform, with most models costing around $9.00 to print,
				excluding shipping. Pricing will be immediately calculated after uploading your 3D model.
			</p>

			<p class="mt-4 font-kode text-gray-200"><b>When is it set to release?</b></p>
			<p>PrintPoly is set to release in Q4 2024.</p>

			<p class="mt-4 font-kode text-gray-200"><b>Who's behind PrintPoly?</b></p>
			<p>
				Just a guy who lives in the middle of an Ohio corn field. All 3D models are printed right
				here in Ohio, using American-made materials.
			</p>

			<hr class="w-full border-1 border-gray-400 my-8" />

			<p class="mt-4 font-kode text-gray-200"><b>Is there a beta signup?</b></p>
			<p>
				PrintPoly will be in open beta starting in July of 2024. Enter your email below to sign up
				for updates.
			</p>
		</div>

		<div class="mt-4 w-full flex flex-col items-center mb-4">
			<form class="flex flex-row w-full space-x-4" on:submit={handleSubmit}>
				<input
					type="email"
					bind:value={email}
					id="email"
					class="font-kode bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-1.5"
					placeholder="john.doe@mail.com"
					required
				/>
				<button class="min-w-fit bg-gray-100 rounded-lg text-gray-900 p-1.5 font-kode font-bold"
					>Sign Up</button
				>
			</form>
		</div>
		{#if showSuccess}
			<div
				class="bg-teal-50 p-1 dark:bg-teal-800/30 w-full absolute bottom-0"
				role="alert"
				in:fade={{ duration: 500 }}
				out:fade={{ duration: 500 }}
			>
				<div class="flex">
					<div class="ms-3">
						<h3 class="text-gray-800 font-semibold dark:text-white">Success!</h3>
						<p class="text-sm text-gray-700 dark:text-neutral-400">
							You will be notified of new updates and beta releases.
						</p>
					</div>
				</div>
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: #151515;
		color: #cac9bf;
	}
</style>
