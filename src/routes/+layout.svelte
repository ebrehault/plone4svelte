<script lang="ts">
	import Layout from '$lib/Layout.svelte';
	import type { PageData } from './$types';
	// import { overrideComponent } from '$lib/helpers';
	// import CustomBreadcrumbs from '../overrides/CustomBreadcrumbs.svelte';

	export let data: PageData;

	// overrideComponent('breadcrumbs', CustomBreadcrumbs);
</script>

<Layout {data}>
	<slot />
</Layout>
