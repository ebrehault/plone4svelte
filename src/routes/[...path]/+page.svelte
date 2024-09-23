<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { plone } from '$lib/api';
	import type { PageData } from '../$types';
	import BlockLayout from '$lib/components/BlockLayout.svelte';
	import ListingLayout from '$lib/components/ListingLayout.svelte';
	import Header from '$lib/components/Header.svelte';
	import ContextNavigation from '$lib/components/ContextNavigation.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	export let data: PageData;

	let currentPath = data.path;
	let classes = getClasses();

	let content = createQuery(plone.getContentQuery({ path: currentPath }));
	let navigation = createQuery(plone.getNavigationQuery({ path: currentPath }));
	let contextNavigation = createQuery(plone.getContextNavigationQuery({ path: currentPath }));
	let breadcrumbs = createQuery(plone.getBreadcrumbsQuery({ path: currentPath }));

	$: {
		if (currentPath !== data.path) {
			currentPath = data.path;
			content = createQuery(plone.getContentQuery({ path: data.path }));
			navigation = createQuery(plone.getNavigationQuery({ path: currentPath }));
			contextNavigation = createQuery(plone.getContextNavigationQuery({ path: currentPath }));
			breadcrumbs = createQuery(plone.getBreadcrumbsQuery({ path: currentPath }));
			classes = getClasses();
		}
	}

	function getClasses() {
		return ['container']
			.concat(currentPath.split('/').map((part: string) => `section-${part}`))
			.join(' ');
	}
</script>

<div class={classes + ' type-' + ($content.data?.['@type'].replaceAll(' ', '-') || 'None')}>
	<Header data={$navigation.data} />
	<main>
		<div class="main-container">
			<Breadcrumbs data={$breadcrumbs.data} />
			<div class="main-content">
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
			</div>
		</div>
		<ContextNavigation data={$contextNavigation.data} />
	</main>
	<footer>
		<p>
			Made with ❤️ by Eric Bréhault – Powered by <a href="https://plone.org">Plone</a> and
			<a href="https://svelte.dev">Svelte</a>
		</p>
	</footer>
</div>
