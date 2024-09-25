<script lang="ts">
	import { getOverride } from '../helpers';
	import { getPath } from '../api';

	export let data: any | undefined;
	const override = getOverride('breadcrumbs');
</script>

{#if data}
	{#if override}
		<svelte:component this={override} {data} />
	{:else}
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
{/if}
