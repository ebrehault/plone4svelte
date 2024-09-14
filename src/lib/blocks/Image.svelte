<script>
	export let block;
	const src = block.url;
	const alt = block.alt;
	const size = block.size;
</script>

<img {src} {alt} class={`size-${size}`} />

<style>
	.size-s {
		max-width: 25%;
	}
	.size-m {
		max-width: 50%;
	}
	.size-l {
		max-width: 100%;
	}
</style>
