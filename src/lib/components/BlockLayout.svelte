<script lang="ts">
	export let data: any | undefined;
	import Image from '../blocks/Image.svelte';
	import Title from '../blocks/Title.svelte';
	import NotSupported from '../blocks/NotSupported.svelte';
	import Slate from '$lib/blocks/Slate.svelte';
	import Description from '$lib/blocks/Description.svelte';
	import Listing from '$lib/blocks/Listing.svelte';

	let blocks = [];
	$: {
		blocks = (data.blocks_layout?.items || []).map((id) => data.blocks?.[id]);
	}

	function getBlockComponent(type: string) {
		if (type === 'title') {
			return Title;
		} else if (type === 'description') {
			return Description;
		} else if (type === 'image') {
			return Image;
		} else if (type === 'slate') {
			return Slate;
		} else if (type === 'listing') {
			return Listing;
		} else {
			return NotSupported;
		}
	}
</script>

{#each blocks as block}
	<svelte:component this={getBlockComponent(block['@type'])} {block} {data} />
{/each}
