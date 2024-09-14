<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { plone } from '$lib/api';
	import type { LayoutData } from '../$types';
	import Header from '$lib/components/Header.svelte';
	import ContextNavigation from '$lib/components/ContextNavigation.svelte';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';

	export let data: LayoutData;

	let navigation = createQuery(plone.getNavigationQuery({ path: data.path }));
	let contextNavigation = createQuery(plone.getContextNavigationQuery({ path: data.path }));
	let breadcrumbs = createQuery(plone.getBreadcrumbsQuery({ path: data.path }));

	$: {
		navigation = createQuery(plone.getNavigationQuery({ path: data.path }));
		contextNavigation = createQuery(plone.getContextNavigationQuery({ path: data.path }));
		breadcrumbs = createQuery(plone.getBreadcrumbsQuery({ path: data.path }));
	}
</script>

<div class="container">
	<Header data={$navigation.data} />
	<div class="main-container">
		<ContextNavigation data={$contextNavigation.data} />
		<Breadcrumbs data={$breadcrumbs.data} />
		<main>
			<slot />
		</main>
	</div>
	<footer></footer>
</div>
