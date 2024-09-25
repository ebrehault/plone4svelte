<script lang="ts">
	import { getPath } from '../api';
	import { getOverride } from '../helpers';

	export let data: any | undefined;
	const override = getOverride('list-item');
</script>

{#if override}
	<svelte:component this={override} {data} />
{:else}
	<div>
		<h2><a href={getPath(data['@id'])}>{data.title}</a></h2>
		<p>{data.description}</p>
	</div>
{/if}
