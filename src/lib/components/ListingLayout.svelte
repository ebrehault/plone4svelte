<script lang="ts">
	import Title from '../blocks/Title.svelte';
	import ListItem from './ListItem.svelte';
	import { getOverride } from '../helpers';

	export let data: any | undefined;
	const override = getOverride('listing-layout');
</script>

{#if override}
	<svelte:component this={override} {data} />
{:else}
	<div class={data.layout}>
		<Title {data} />
		{#each data.items as item}
			<ListItem data={item} />
		{/each}
	</div>
{/if}
