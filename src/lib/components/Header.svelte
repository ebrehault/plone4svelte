<script lang="ts">
	import { getPath } from '../api';
	import { getOverride } from '../helpers';

	export let data: any | undefined;
	const override = getOverride('header');
</script>

{#if override}
	<svelte:component this={override} {data} />
{:else}
	<header>
		<h1>
			<a href="/">Plone4Svelte</a>
		</h1>
		{#if data}
			<nav class="global-navigation">
				<ul>
					{#each data.items as link}
						<li>
							<a href={getPath(link['@id'])}>{link.title}</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}
	</header>
{/if}
