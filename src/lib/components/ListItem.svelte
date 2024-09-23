<script lang="ts">
	import { getPath } from '../api';

	export let data: any | undefined;
</script>

<div>
	<h2><a href={getPath(data['@id'])}>{data.title}</a></h2>
	<p>{data.description}</p>
</div>
