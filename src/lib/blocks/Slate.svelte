<script>
	import { slateToHtml } from '@slate-serializers/html';

	export let block;
</script>

<div>
	{@html slateToHtml(block.value)}
</div>
