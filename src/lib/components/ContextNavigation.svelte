<script lang="ts">
	import { getOverride } from '../helpers';
	import { getPath } from '../api';

	export let data: any | undefined;
	const override = getOverride('context-navigation');
</script>

{#if data}
	{#if override}
		<svelte:component this={override} {data} />
	{:else}
		<section>
			<nav class="context-navigation">
				<ul>
					{#each data.items as link}
						<li>
							<a href={getPath(link['@id'])}>{link.title}</a>
						</li>
					{/each}
				</ul>
			</nav>
		</section>
	{/if}
{/if}
