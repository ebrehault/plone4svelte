<script>
	import { getOverride } from '../helpers';
	export let data;
	const override = getOverride('title');
</script>

{#if override}
	<svelte:component this={override} {data} />
{:else}
	<h1 class="title">{data.title}</h1>
{/if}
