<script lang="ts">
	import { getPath } from '$lib/api';

	export let data: any | undefined;
</script>

{#if data}
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
