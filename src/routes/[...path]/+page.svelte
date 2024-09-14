<script lang="ts">
	import { createQuery, type CreateQueryResult } from '@tanstack/svelte-query';
	import { plone } from '$lib/api';
	import type { PageData } from '../$types';
	import BlockLayout from '$lib/components/BlockLayout.svelte';
	import ListingLayout from '$lib/components/ListingLayout.svelte';

	export let data: PageData;

	let content = createQuery(plone.getContentQuery({ path: data.path }));
	$: content = createQuery(plone.getContentQuery({ path: data.path }));
</script>

{#if $content.status === 'pending'}
	<span>Loading...</span>
{:else if $content.status === 'error'}
	<span>Error: {$content.error.message}</span>
{:else if $content.data.blocks}
	<BlockLayout data={$content.data} />
{:else if $content.data.items}
	<ListingLayout data={$content.data} />
{:else}
	<span>Unknown content type</span>
{/if}
