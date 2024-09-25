<script>
	import { getOverride } from '../helpers';
	export let block;
	const override = getOverride('image');
	const src = block.url;
	const alt = block.alt;
	const size = block.size;
</script>

{#if override}
	<svelte:component this={override} {data} />
{:else}
	<img {src} {alt} class={`size-${size}`} />

	<style>
		.size-s {
			max-width: 25%;
		}
		.size-m {
			max-width: 50%;
		}
		.size-l {
			max-width: 100%;
		}
	</style>
{/if}
