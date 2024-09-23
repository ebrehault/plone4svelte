<script lang="ts">
	import Layout from '$lib/Layout.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Layout {data}>
	<slot />
</Layout>
