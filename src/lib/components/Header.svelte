<script lang="ts">
	import { getPath } from '../api';

	export let data: any | undefined;
</script>

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
