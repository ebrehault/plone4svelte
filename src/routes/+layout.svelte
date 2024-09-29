<script lang="ts">
	import { Layout } from 'plone4svelte';
	import type { PageData } from './$types';
	// import { overrideComponent } from 'plone4svelte';
	// import CustomBreadcrumbs from '../overrides/CustomBreadcrumbs.svelte';

	export let data: PageData;

	// overrideComponent('breadcrumbs', CustomBreadcrumbs);
</script>

<Layout {data}>
	<slot />
</Layout>
