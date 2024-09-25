<script>
	import { getOverride } from '../helpers';
	export let data;
	const override = getOverride('description');
</script>

{#if override}
	<svelte:component this={override} {data} />
{:else}
	<p class="description">{data.description}</p>
{/if}
