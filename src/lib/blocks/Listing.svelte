<script>
	import { plone } from '../api';
	import { createQuery } from '@tanstack/svelte-query';
	import { getOverride } from '../helpers';
	export let block;

	const override = getOverride('listing');
	let content = createQuery(plone.getQuerystringSearchQuery({ ...block.querystring }));
</script>

{#if override}
	<svelte:component this={override} {data} />
{:else if $content.status === 'pending'}
	<span>Loading...</span>
{:else if $content.status === 'error'}
	<span>Error: {$content.error.message}</span>
{:else if $content.data?.items}
	{#if block.headline}
		{#if block.headlineTag === 'h2'}
			<h2>{block.headline}</h2>
		{:else}
			<h3>{block.headline}</h3>
		{/if}
	{/if}
	{#each $content.data?.items as item}
		{#if block.headlineTag === 'h2'}
			<h2>{item.title}</h2>
		{:else}
			<h3>{item.title}</h3>
		{/if}
		{#if item.description}
			<p>{item.description}</p>
		{/if}
	{/each}
{:else}
	<span>Unknown content type</span>
{/if}
