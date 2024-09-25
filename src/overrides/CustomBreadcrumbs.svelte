<script lang="ts">
	import { getPath } from '$lib/api';

	export let data: any;
</script>

<nav class="breadcrumbs">
	<div>
		<a href={getPath(data.root)}>Home</a>
	</div>
	{#each data.items as link}
		<div>
			<a href={getPath(link['@id'])}>{link.title}</a>
		</div>
	{/each}
</nav>
