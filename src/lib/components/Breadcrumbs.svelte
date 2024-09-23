<script lang="ts">
	import { getPath } from '../api';

	export let data: any | undefined;
</script>

{#if data}
	<nav class="breadcrumbs">
		<ul>
			<li>
				<a href={getPath(data.root)}>Home</a>
			</li>
			{#each data.items as link}
				<li>
					<a href={getPath(link['@id'])}>{link.title}</a>
				</li>
			{/each}
		</ul>
	</nav>
{/if}
