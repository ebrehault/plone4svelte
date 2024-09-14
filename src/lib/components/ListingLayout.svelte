<script lang="ts">
	import Title from '../blocks/Title.svelte';
	import ListItem from './ListItem.svelte';

	export let data: any | undefined;
</script>

<div class={data.layout}>
	<Title {data} />
	{#each data.items as item}
		<ListItem data={item} />
	{/each}
</div>
