<script lang="ts">
	import type { PageData } from '../$types';
	import { Page } from 'plone4svelte';
	export let data: PageData;
</script>

<Page {data} />
