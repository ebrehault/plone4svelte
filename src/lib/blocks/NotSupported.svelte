<script>
	export let block;
</script>

<div>
	{block['@type']} block is not supported yet.
	<blockquote>
		<pre>{JSON.stringify(block, null, 2)}</pre>
	</blockquote>
</div>
