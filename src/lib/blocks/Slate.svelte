<script>
	import { slateToHtml } from '@slate-serializers/html';
	import { getOverride } from '../helpers';
	export let block;
	const override = getOverride('slate');
</script>

{#if override}
	<svelte:component this={override} {data} />
{:else}
	<div>
		{@html slateToHtml(block.value)}
	</div>
{/if}
