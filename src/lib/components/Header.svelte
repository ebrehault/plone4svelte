<script lang="ts">
	import { getPath } from '$lib/api';

	export let data: any | undefined;
</script>

<header>
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
